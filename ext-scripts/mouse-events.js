// export function mouseEvents() {
//     const frontDiv = document.querySelector('.scroll-container');
//     const backDiv = document.querySelector('.BG-area');

//     // frontDiv.addEventListener('mousedown', (event) => {
//     //     const backDivMouseEvent = new MouseEvent('mousedown', {
//     //         clientX: event.clientX,
//     //         clientY: event.clientY,
//     //         bubbles: true,
//     //         cancelable: true
//     //     });

//     //     backDiv.dispatchEvent(backDivMouseEvent);
//     // });

//     // frontDiv.addEventListener('mouseup', (event) => {
//     //     const backDivMouseEvent = new MouseEvent('mouseup', {
//     //         clientX: event.clientX,
//     //         clientY: event.clientY,
//     //         bubbles: true,
//     //         cancelable: true
//     //     });

//     //     backDiv.dispatchEvent(backDivMouseEvent);
//     // });
    
//     frontDiv.addEventListener('wheel', (event) => {
//         // const backDivScrollEvent = new WheelEvent('wheel', {
//         //     deltaY: event.deltaY,
//         // });
//         // console.log(event.deltaY)
//         // backDiv.dispatchEvent(event);
//         const scrollPos = frontDiv.scrollTop; // Get scroll position
//         backDiv.scrollTop = scrollPos;
//         console.log("scrolling",event)
//     },{passive: true});
// }

export function syncScroll() {
    const frontDiv = document.querySelector('.scroll-container');
    const backDiv = document.querySelector('.BG-class');

    frontDiv.addEventListener('wheel', (e) => {
        // const scrollPercentage = frontDiv.scrollTop / (frontDiv.scrollHeight - frontDiv.clientHeight);
        // const scrollAmount = scrollPercentage * (backDiv.scrollHeight - backDiv.clientHeight);
        // backDiv.scrollTop = scrollAmount;
        // console.log("scrolling",e)
        // const backDivScrollEvent = new WheelEvent('wheel', {
        //     deltaY: e.deltaY,
        // });
        // console.log(backDivScrollEvent.deltaY)
        // backDiv.dispatchEvent(backDivScrollEvent);
        if(e.deltaY > 0){
            backDiv.scrollTop = frontDiv.scrollTop +window.innerHeight;
            // console.log(window.innerHeight);
        }
        else{
            backDiv.scrollTop = frontDiv.scrollTop - window.innerHeight;}
    },{passive: true});
}