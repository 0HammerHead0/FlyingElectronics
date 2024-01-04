import gsap from 'gsap'

let scrollTimeout = false;

export function scrollTrigger(ScrollTrigger){
    const container = document.querySelector('.scroll-container');
    const sections = gsap.utils.toArray('.scroll-area');
    
    sections.forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            scroller: container,
            start: "top center",
            end: "bottom center",
            toggleClass: {
                targets: section,
                className: "active-section"
            },
            onEnter: () => {
                const sectionId = section.id;
                console.log("Section entered:",sectionId);
            },
            onLeave: () => {
                const sectionId = section.id;
                console.log("Section left:",sectionId);
            },
            onEnterBack: () => {
                const sectionId = section.id;
                console.log("Section entered:",sectionId);
            },
            onLeaveBack: () => {
                const sectionId = section.id;
                console.log("Section left:",sectionId);
            }
        });
    });
    const snapPoints = 1 / (sections.length-1);

    ScrollTrigger.create({
        scroller: container,
        snap: {
            snapTo: snapPoints,
            duration: 0.5 // Adjust duration as needed
        },
        onSnapComplete: (scroll) => {
            scrollTimeout = true;
            setTimeout(() => {
                scrollTimeout = false;
            }, 500);
        }
    });
};