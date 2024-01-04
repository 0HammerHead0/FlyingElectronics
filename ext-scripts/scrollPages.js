// Assuming this function handles the scroll transition from page 1 to page 2
export function scrollToPage2() {
    const moveAndRotate = gsap.timeline();

    // Reverse the 'moveUpTween' animation
    moveAndRotate.to(model.rotation, {
        x: 0, // Return to the original rotation
        duration: 1,
        ease: "power2.easeInOut"
    }, 0.3)
    .to(model.position, {
        y: 0, // Move the drone back to its initial y position
        duration: 1,
        ease: "power2.easeInOut",
        onComplete: () => {
            // Perform any other necessary actions when the animation completes
        }
    }, 0.3)
    .reverse();
    
}
