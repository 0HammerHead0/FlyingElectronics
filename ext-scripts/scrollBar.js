import gsap from 'gsap';
export function scrollBar(){
    const bubbles = document.querySelectorAll('.bubble');
    const labels = document.querySelectorAll('.label');
    const segLength = window.innerHeight / (bubbles.length + 1);
    bubbles.forEach((bubble,index)=> {
        bubble.style.top = `${(index+1)*segLength}px`;
        labels[index].style.top = `${(index+1)*segLength - labels[index].offsetHeight/2}px`;
    });

}
export function bubbleTransition(globalActiveSection){
    var str = 'bubble-'+String(globalActiveSection);
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble,index)=> {
        if(bubble.id == str){
            gsap.to(bubble.style, {
                boxShadow: '0 0 10px 5px rgb(204, 255, 255, 0.7)',
                opacity: 1,
                duration: 0.5,
                ease: "power2.easeInOut",
            }, 0)
        }
        else{
            gsap.to(bubble.style, {
                boxShadow: 'none',
                opacity: 0.5,
                duration: 0.5,
                ease: "power2.easeInOut",
            }, 0)
        }
    });
    
    const inner = document.querySelector('.scrollBar__track');
    const segLength = window.innerHeight / (bubbles.length + 1);
    const scrollBarHeight = segLength * (globalActiveSection);
    const midPercentage = (scrollBarHeight / window.innerHeight) * 100;
    const lowPercentage = midPercentage - segLength/window.innerHeight * 40;
    const highPercentage = midPercentage + segLength/window.innerHeight * 40;
    // inner.style.transition = 'background 0.5s ease-in-out'; // Apply transition property
    inner.style.background = `linear-gradient(transparent ${lowPercentage}%, white ${midPercentage}%, transparent ${highPercentage}%)`;
    // console.log(lowPercentage,midPercentage,highPercentage)


    const bg = document.querySelector('.scrollBar__track__BG');
    const bg_track = document.querySelector('.scrollBar__track');
    const labels = document.querySelectorAll('.label');
    let stay = false;
    function showLabel(index){
        stay = true;
        labels.forEach((label,index)=> {
            gsap.to(label.style, {
                opacity: 1,
                left:'10px',
                duration: 0.1,
                ease: "power1.out",
                onUpdate: () => {
                    stay = true;
                }
                // onComplete: () =>{
                //     
                // }
            }, 0)
        });
    }
    bg.addEventListener('mouseover',showLabel);
    bg_track.addEventListener('mouseover',showLabel);
    bg.addEventListener('mouseout',()=>{
        console.log('out')
        if(stay) return;
        labels.forEach((label,index)=> {
            const timeline = gsap.timeline();
            timeline.to(label.style, {
                opacity: 0,
                left:'-50px',
                duration: 0.1,
                ease: "power1.out",
                onUpdate: () => {
                    if(stay){
                        console.log('killed')
                        timeline.kill();
                        return;
                    }
                },
                onComplete: () => {
                    stay = false;
                }
            },0)
        });
    });
}
