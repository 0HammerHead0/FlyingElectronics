export function setupPosition(element) {
    // Get the elements
    const webglElement = document.querySelector('.webgl');
    const blobElement = document.getElementById('blob');

    // Get the center coordinates of the webgl element
    const webglRect = webglElement.getBoundingClientRect();
    const webglCenterX = webglRect.left + webglRect.width / 2;
    const webglCenterY = webglRect.top + webglRect.height / 2;

    // Calculate blob element's position based on the webgl center
    const blobWidth = blobElement.offsetWidth;
    const blobHeight = blobElement.offsetHeight;
    const blurWidth =  webglRect.width;
    const blurHeight = webglRect.height;
    // Set the position of blob element to align centers
    blobElement.style.position = 'absolute';
    blobElement.style.left = `${webglCenterX - blobWidth / 2}px`;
    blobElement.style.top = `${webglCenterY - blobHeight / 2}px`;



    const svgButton = document.querySelector('.svg-button');
    
    svgButton.addEventListener('click', () => {
        const scrollContainer = document.querySelector('.scroll-container');
        scrollContainer.style.pointerEvents = 'auto';
        const section2 = document.querySelector('#page-2');
        if (section2) {
            const section2OffsetTop = section2.offsetTop;
            const scrollOptions = {
                top: section2OffsetTop,
                behavior: 'smooth' // Use smooth scroll behavior
            };
            scrollContainer.scrollTo(scrollOptions);
        }
    });
}