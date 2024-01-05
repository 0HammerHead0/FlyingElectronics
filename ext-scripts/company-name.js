import gsap from 'gsap';
export function name(modelLoadedPromise){
    const alphas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    document.addEventListener('DOMContentLoaded', function() {
        const letters = document.querySelector('.company-name');
        letters.addEventListener('mouseover', function(e) {
            let iterations = 0;
            const interval = setInterval(()=> {
                e.target.innerText = e.target.innerText.split("").map((alpha,index) => {
                    if(index< iterations){
                        return e.target.dataset.value[index];
                    }
                    return alphas[Math.floor( Math.random() * 26)]})
                    .join("");
                    if(iterations >= e.target.dataset.value.length) clearInterval(interval);
                    iterations+=1/5;
            });
        },20);
    });
}
