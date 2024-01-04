import gsap from 'gsap';

function scrollHandler() {
    const item = document.querySelector('.item');
    if (!item) return; // Ensure the item exists before proceeding

    const scrollOffset = window.scrollY;
    const windowHeight = window.innerHeight;
    const itemOffset = item.offsetTop;

    if (scrollOffset > itemOffset - windowHeight / 2) {
        gsap.to(item, {
            x: '10%',
            y: '50%',
            opacity: 1,
            duration: 0.5,
            ease: 'power2.inOut'
        });
    }
}
function print(){
    console.log('scroll');
}
export function attachScrollListener() {
    document.addEventListener('DOMContentLoaded', () => {
        window.addEventListener('scroll', print);
    });
}
