import * as THREE from 'three';
function toggle() {
    const scrollContainer = document.querySelector('.scroll-container');
    // scrollContainer.style.pointerEvents = 'none';
    const btn = document.getElementById('btn');
    if(btn.checked){
        scrollContainer.style.pointerEvents = 'none';
    }
    else{
        scrollContainer.style.pointerEvents = 'auto';
    }
}
export function toggleState(flag) {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', toggle);
}