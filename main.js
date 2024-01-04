import './style.css'
import './btn.css'
import { setupPosition } from './ext-scripts/position.js'
// import {mouseEvents} from './ext-scripts/mouse-events.js'
import {syncScroll} from './ext-scripts/mouse-events.js'
import { attachScrollListener } from './ext-scripts/scroll.js';
import { bubbleTransition } from './ext-scripts/scrollBar.js';
import {scrollBar} from './ext-scripts/scrollBar.js';
import { toggleState} from './ext-scripts/toggleState.js';
// import  {scrollTrigger} from './ext-scripts/scrollTrigger.js';
import * as THREE from 'three';
import  {gui} from './ext-scripts/gui.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { SavePass } from 'three/examples/jsm/postprocessing/SavePass.js'; // Check the correct path
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { BlendShader } from 'three/examples/jsm/shaders/BlendShader.js';
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js'; // Check the correct path
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
scrollTrigger(ScrollTrigger);

const container = document.querySelector('.webgl-content');
const sizes = {
    width: container.clientWidth * 1,
    height: container.clientHeight * 1
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
const canvas = document.querySelector('.webgl');
const OrbitControl = new OrbitControls(camera, canvas);
OrbitControl.enableDamping = true;
OrbitControl.minDistance = 0;
OrbitControl.enablePan = true;
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas:canvas , alpha: true });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.needsUpdate = true;
renderer.setSize(sizes.width, sizes.height);
const axesHelper = new THREE.AxesHelper();
camera.position.set(0 , 0, 0.7);
const scene = new THREE.Scene();
// scene.add(axesHelper);
const y_axis = new THREE.Vector3(0, 1, 0).normalize();
const x_axis = new THREE.Vector3(1, 0, 0).normalize();
const z_axis = new THREE.Vector3(0, 0, 1).normalize();

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

let globalActiveSection = 1;
let globalPrevSection = 0;

var model_loaded = false;
var model;
var props=[];
var motors = [];
var hasTransitioned = true; 
var isTransitioningUp = false;
var isTransitioningDown = false;
var lastScrollPos = 0;
var threshold = 0.0005;
var angle = { value: 0.0 }; // Example angle increment: adjust as needed
var vector = new THREE.Vector3();
var initialPose = new THREE.Vector3(0, 0, 0);
const quaternion = new THREE.Quaternion();    
// ----------------------------------Progress Bar--------------------------------------------
const progressBar = (value,progress) =>{
    const droneElement = document.querySelector('.drone-ldBar');
    const ldBarElement = document.querySelector('.inner');
    // ldBarElement.style.transition = 'width 0.5s ease-in-out';
    ldBarElement.style.width=String(value)+"px";
    var droneLeft = value+0.35*window.innerWidth - 25;
    droneElement.style.left=String(droneLeft)+"px";
    // ldBarElement.style.transition = 'left 0.5s ease-in-out';
    
    const offSet = window.innerHeight - 25 - window.innerHeight/2;
    droneElement.style.top=String(offSet)+"px";
}
var barFlag = true;
let colors = ['#0000ff', '#3366ff', '#6699ff', '#99ccff', '#cceeff', '#ffccff', '#ff99ff'];
function animateProgressBar() {
    if (!barFlag) return;

    const innerBar = document.querySelector('.inner');
    
    // Create a temporary array that is one shifted from the original colors
    const shiftedColors = [...colors]; // Create a copy of the original array
    shiftedColors.unshift(shiftedColors.pop()); // Shift the array by moving the last element to the beginning
    colors = shiftedColors;
    // console.log(colors);
    const gradient = shiftedColors
        .map((color, index) => `${color} ${(100 / shiftedColors.length) * index}%`)
        .join(', ');

    innerBar.style.background = `linear-gradient(to right, ${gradient})`;
}
// animateProgressBar();
setInterval(animateProgressBar,100);// Adjust the time interval as needed
// ----------------------------------Progress Bar END--------------------------------------------
const gltfLoader = new GLTFLoader();
gltfLoader.load(
    'models/drone.glb',
    (gltf) => {
        model = gltf.scene;
        model.rotateY(Math.PI);
        model.position.set(0,-0.2,0);
        model.scale.set(10,10,10);
        model.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                child.material.transparent = true;
                child.material.needsUpdate = true;
                if(child.name.startsWith('prop')){
                    props.push(child);
                }
                if(child.name.startsWith('motor')){
                    motors.push(child);
                }

                const material = child.material;
                if (material.map) {
                    if(material.name == 'logo'){
                        // Access the texture applied to the material
                        const texture = material.map;
                        // Do something with the texture (e.g., apply settings)
                        texture.minFilter = THREE.LinearFilter;
                        texture.magFilter = THREE.LinearFilter;
                        // Other texture manipulations...
                    }
                    else{
                        const texture = material.map;

                        // Create a canvas for downsampling
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');
    
                        // Define the downscaled size (e.g., half of the original texture size)
                        const newWidth = texture.image.width / 2; // Adjust as needed
                        const newHeight = texture.image.height / 2; // Adjust as needed
    
                        canvas.width = newWidth;
                        canvas.height = newHeight;
    
                        // Draw the original texture onto the canvas at the downscaled size
                        context.drawImage(texture.image, 0, 0, newWidth, newHeight);
    
                        // Create a new downscaled image data from the canvas
                        const downscaledImageData = context.getImageData(0, 0, newWidth, newHeight);
    
                        // Create a new texture using the downscaled image data
                        const downscaledTexture = new THREE.CanvasTexture(canvas);
                        downscaledTexture.needsUpdate = true;
    
                        // Use the downscaled texture in place of the original texture
                        material.map = downscaledTexture; // Replace the original texture with the downscaled one
                        material.needsUpdate = true;
                    }
                }
            }
        });
        scene.add(model);
        initLight(leftLight);
        initLight(rightLight);
        initLight(frontLight);
        initLight(bottomLight);
        model_loaded=true;
        // mouseEvents();
        const ldBarElement = document.querySelector('.ldBar');
        gsap.to(ldBarElement, {opacity: 0, duration: 0.6, delay:0,ease: "power2.easeInOut"});
        ldBarElement.style.zIndex = -10;
        barFlag = false;

    },
    (xhr) => {
        const progress = (xhr.loaded / xhr.total).toFixed(2);
        const value = (progress*(0.3*window.innerWidth - 2));
        progressBar(value);
        window.addEventListener("resize", () =>{
            const value = (progress*(0.3*window.innerWidth - 2));
            progressBar(value,progress);
        });
    },
    (error) => {
        console.log('error', error);
    }
);
const modelLoadedPromise = new Promise((resolve) => {
    const checkModelLoaded = () => {
        if (model_loaded) {
            resolve();
        } else {
            requestAnimationFrame(checkModelLoaded);
        }
    };
    checkModelLoaded();
});
const droneBoundingSphere = new THREE.Sphere();
var droneBoundingBox ;
const shadowRes = 2048;
const  near = 0.5;
const far = 300;
var bias = -0.00001;
function initLight(light) {
    if (light instanceof THREE.RectAreaLight) {
        light.lookAt = model;
        scene.add(light);
    } else if (light instanceof THREE.DirectionalLight || light instanceof THREE.PointLight) {
        droneBoundingBox = new THREE.Box3().setFromObject(model);
        light.shadow.camera.updateProjectionMatrix();
        light.castShadow = true;
        light.shadow.bias = bias;
        light.shadow.mapSize.width = shadowRes;
        light.shadow.mapSize.height = shadowRes;
        light.shadow.camera.near = near;
        light.shadow.camera.far = far;
        const factor = 1.25;
        light.shadow.camera.left = droneBoundingBox.min.x - factor;
        light.shadow.camera.right = droneBoundingBox.max.x + factor;
        light.shadow.camera.top = droneBoundingBox.max.y + factor;
        light.shadow.camera.bottom = droneBoundingBox.min.y - factor;
        light.target = model;
        scene.add(light);
    } else {
        scene.add(light);
    }
}

const leftLight = new THREE.DirectionalLight(0x404040 , 150);
leftLight.position.set(-20, 20, 20);

const rightLight = new THREE.DirectionalLight(0x404040 , 120);
rightLight.position.set(20, 20, -20);

const frontLight = new THREE.DirectionalLight(0x404040 , 120);
frontLight.position.set(20,20,20);

const bottomLight = new THREE.DirectionalLight(0x404040 , 150);
bottomLight.position.set(0,-30,-10);


// gui(rightLight, leftLight,frontLight,bias,far,near,OrbitControl,camera);
var animationFlag = true;
const propellerScene = new THREE.Scene();
props.forEach((propeller) => {
    propellerScene.add(propeller);
});
function animateDrone() {
    modelLoadedPromise.then(() => {
        // gui(camera,model);
        const moveAndRotate = gsap.timeline();
        moveAndRotate
        .to(model.position, {
            y: 0.1,
            duration: 1,
            // onComplete: animateCamera,
            ease: "power2.easeInOut",
            onComplete:animateCamera,
            onUpdate: ()=>{
                if(globalActiveSection !=1){
                    moveAndRotate.kill();
                    return;
                }
            }
        },0.3)
        .to(model.rotation, {
            x: -( -Math.PI / 6 + Math.PI), 
            duration: 1,
            ease: "power2.easeInOut",
            onComplete:()=>{
                // console.log(model.getWorldDirection(vector));
                initialPose.copy(model.getWorldDirection(vector));
                // createLine(initialPose, 'red');
            },
            onUpdate: ()=>{
                if(globalActiveSection !=1){
                    moveAndRotate.kill();
                    return;
                }
            }
        }, 0.3)
        if(globalActiveSection !=1) return;
        props.forEach((prop) => {
            const propTimeline = gsap.timeline();
            propTimeline.to(prop.rotation, {
                y: (0.13*Math.PI),
                duration: 0.5,
                ease: "power2.easeIn",
                onComplete:rotateProps,
                onUpdate:()=>{
                    if(globalActiveSection !=1){
                        propTimeline.kill();
                        return;
                    }
                }
            }, 0);
            moveAndRotate.add(propTimeline, 0);
        });
    });
}
const center = new THREE.Vector3();
var stopRotation = false;
function animateCamera() {
    if(hasTransitioned && globalActiveSection == 1){
        const radius = 0.7;
        let theta = {value:0.0}
        stopRotation = false;
        gsap.to(theta, {//here theta.value was there converted to theta
            value: Math.PI *2,
            duration:7,
            ease: "power1.in",
            onUpdate: () => {
                if(globalActiveSection !=1){
                    gsap.killTweensOf(theta); // Stop the animation when the flag is true
                    return;
                }
                if (stopRotation)
                {
                    gsap.killTweensOf(theta); // Stop the animation when the flag is true
                }
                else{
                    const x = radius * Math.sin(theta.value);
                    const z = radius * Math.cos(theta.value);
                    camera.position.x = x;
                    camera.position.z = z;
                }
            
            },
            onComplete:()=>{
                if(globalActiveSection !=1) return;
                theta.value=0;
                infiniteCamera();
            }
        });
        function infiniteCamera(){
            gsap.to(theta, {//here theta.value was there converted to theta
                value: Math.PI *2,
                duration:5,
                repeat: -1,
                ease:'linear',
                onUpdate: () => {
                    if(globalActiveSection !=1){
                        gsap.killTweensOf(theta); // Stop the animation when the flag is true
                        return;
                    }
                    if (stopRotation)
                    {
                        gsap.killTweensOf(theta); // Stop the animation when the flag is true
                    }
                    else
                    {
                        const x = radius * Math.sin(theta.value);
                        const z = radius * Math.cos(theta.value);
                        camera.position.x = x;
                        camera.position.z = z;
                        // camera.lookAt(model);
                        if (theta.value == Math.PI * 2) {
                            theta.value = 0;
                        }
                    }
                }
            });
        }
    }
}

function createLine(vector, colorName) {
    const colorMap = {
        red: 0xff0000,
        green: 0x00ff00,
        blue: 0x0000ff,
        yellow: 0xffff00,
        black: 0x000000,
    };
    const color = colorMap[colorName] || 0xffffff;
    const points = [];
    points.push(new THREE.Vector3(0, 0, 0));
    points.push(vector);
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const lineMaterial = new THREE.LineBasicMaterial({ color: color });
    const line = new THREE.Line(lineGeometry, lineMaterial);
    scene.add(line);
}

function translucent(keyword,sectionNum){
    modelLoadedPromise.then(() => {
        if(keyword == 'none'){
            model.traverse((child) => {
                if (child.isMesh) {
                    const originalMaterial = child.material; // Save a reference to the original material
                    const clonedMaterial = originalMaterial.clone(); // Clone the material
                    clonedMaterial.opacity = 1; // Set opacity for the cloned material

                    child.material = clonedMaterial; // Assign the cloned material to the object

                    child.receiveShadow = true;
                    child.castShadow = true;

                    gsap.to(clonedMaterial, {
                        opacity:1,
                        duration: 0.8,
                        ease: "power2.out",
                        onUpdate:()=>{
                            if(globalActiveSection != sectionNum){
                                gsap.killTweensOf(child.material);
                                return;
                            }
                        }
                    })
                }
            });
            return;
        }
        model.traverse((child) => {
            try{
                if (child.isMesh) {
                    if (child.name.startsWith(keyword)){
                        const originalMaterial = child.material; // Save a reference to the original material
                        const clonedMaterial = originalMaterial.clone(); // Clone the material
                        clonedMaterial.opacity = 1; // Set opacity for the cloned material

                        child.material = clonedMaterial; // Assign the cloned material to the object

                        child.receiveShadow = true;
                        child.castShadow = true;

                        gsap.to(clonedMaterial, {
                            opacity:1,
                            duration: 0.8,
                            ease: "power2.out",
                            onUpdate:()=>{
                                if(globalActiveSection != sectionNum){
                                    gsap.killTweensOf(child.material);
                                    return;
                                }
                            }
                        })
                    }
                    else{
                        const originalMaterial = child.material; // Save a reference to the original material
                        const clonedMaterial = originalMaterial.clone(); // Clone the material
                        clonedMaterial.opacity = 1; // Set opacity for the cloned material

                        child.material = clonedMaterial; // Assign the cloned material to the object
                        // clonedMaterial.transparent = true; // Enable transparency in the material
                        // clonedMaterial.alphaTest = 0.05;
                        child.receiveShadow = false;
                        child.castShadow = false;

                        gsap.to(clonedMaterial, {
                            opacity:0.1,
                            duration: 0.8,
                            ease: "power2.out",
                            onUpdate:()=>{
                                if(globalActiveSection != sectionNum){
                                    gsap.killTweensOf(child.material);
                                    return;
                                }
                            }
                        })
                    
                    }
                }
            }
            catch(e)
            {
                console.log(child.name)
                console.log(e);
            }
        });
    });
}

const bringDown = () => {
    gsap.to(OrbitControl.target, {
        y: 0.1,
        duration: 0.5,
        ease: "power2.out",
        onUpdate:()=>{
            if(globalActiveSection !=1){
                gsap.killTweensOf(OrbitControl.target);
                return;
            }
        }
    });
}; 
const bringUp=() =>{
    gsap.to(OrbitControl.target, {
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        onUpdate:()=>{
            if(globalActiveSection !=1){
                gsap.killTweensOf(OrbitControl.target);
                return;
            }
        }
    });
}
function printCameraCoordinates(camera, orbitControl) {
    // Function to update and display coordinates
    function updateCoordinates() {
        console.group('Camera Properties');
        console.log(`Position - x: ${camera.position.x.toFixed(2)}, y: ${camera.position.y.toFixed(2)}, z: ${camera.position.z.toFixed(2)}`);
        console.log(`Rotation - x: ${camera.rotation.x.toFixed(2)}, y: ${camera.rotation.y.toFixed(2)}, z: ${camera.rotation.z.toFixed(2)}`);
        // console.log(`Zoom - ${orbitControl.zoom.toFixed(2)}`);
        console.log(`Target - x: ${orbitControl.target.x.toFixed(2)}, y: ${orbitControl.target.y.toFixed(2)}, z: ${orbitControl.target.z.toFixed(2)}`);
        console.log(`zoom - ${orbitControl.object.zoom.toFixed(2)}`)
        // Add any other relevant properties here
        console.groupEnd();
    }

    // Listen for changes in OrbitControl
    orbitControl.addEventListener('change', updateCoordinates);

    // Initial display of camera coordinates
    updateCoordinates();
}
let startTime = null;
let revolutions = 0;
const angularSpeed = 0.0085;
const toggleBtn = document.getElementById('btn');
toggleBtn.addEventListener('click', () => {
    animationFlag = !animationFlag;
    console.log(animationFlag);
    if(animationFlag)
    {   
        if(globalActiveSection == 1){
            scrollToPage1();
        }
        else if(globalActiveSection ==2){
            scrollToPage2();
        }
        else if(globalActiveSection == 3){
            scrollToPage3();
        }
        else if(globalActiveSection == 4){
            scrollToPage4();
        }
        else if(globalActiveSection == 5){
            scrollToPage5();
        }
        else if(globalActiveSection == 6){
            scrollToPage6();
        }
        else if(globalActiveSection == 7){
            scrollToPage7();
        }
        else if(globalActiveSection == 8){
            scrollToPage8();
        }
        else if(globalActiveSection == 9){
            scrollToPage9();
        }

    }
    else{
        if(globalActiveSection ==1){
            stopRotation = true;
            const timeline1 = gsap.timeline({ duration: 0 });
            timeline1.add(bringDown);
            timeline1.add(
                gsap.to(camera.position, {
                    x:0,
                    y:0,
                    z: 0.5,
                    duration: 0.5,
                    ease: "power2.out",
                })
            );
        }
        else if(globalActiveSection==2){
            printCameraCoordinates(camera, OrbitControl);
        }
        else if(globalActiveSection==3){
            printCameraCoordinates(camera, OrbitControl);
        }
        else if(globalActiveSection==4){
            printCameraCoordinates(camera, OrbitControl);
        }
        else if(globalActiveSection==5){
            printCameraCoordinates(camera, OrbitControl);
        }
        else if(globalActiveSection==6){
            printCameraCoordinates(camera, OrbitControl);
        }
        else if(globalActiveSection==7){
            printCameraCoordinates(camera, OrbitControl);
        }
        else if(globalActiveSection==8){
            printCameraCoordinates(camera, OrbitControl);
        }
        else if(globalActiveSection==9){
            printCameraCoordinates(camera, OrbitControl);
        }
    }
});
function rotateProps(timestamp) {
    if (!startTime) {
        startTime = timestamp;
    }
    const deltaTime = timestamp - startTime; // Calculate time passed
    if(!stopRotation){
        // Calculate the number of revolutions
        const elapsedTimeInSeconds = deltaTime / 1000; // Convert milliseconds to seconds
        const currentRevolutions = elapsedTimeInSeconds * angularSpeed / (2 * Math.PI);
        
        if (currentRevolutions >= revolutions + 1) {
            const timeTaken = timestamp - startTime; // Time taken for 1 revolution
            console.log(`Time taken for 1 revolution: ${timeTaken}ms`);
            revolutions++;
        }
        
        props.forEach((propeller) => {
            propeller.rotateY(angularSpeed);
        });
        requestAnimationFrame(rotateProps);
    }
    else{
        props.forEach((propeller) => {
            gsap.to(propeller.rotation, {
                y: 0,
                duration: 2,
                ease: "power1.out",
            });
        });
    }
}
// -------------------------------------SCROLL PAGES TRANSITION-------------------------
function debounce(func, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, arguments);
        }, delay);
    };
}
function scrollToPage9(){
    // camera Position - x: -0.26, y: -0.03, z: 0.25
    // camera Rotation - x: 0.51, y: 0.36, z: -0.19
    // orbitControl Target - x: -0.48, y: 0.26, z: -0.27
    const timeline9 = gsap.timeline();
    timeline9.to(camera.position,{
        x: -0.55,
        y: 0.10,
        z: 0.32,
        duration:1,
        ease:"power2.inOut"
    },0)
    timeline9.to(camera.rotation,{
        x: -0.26, y: -1.1, z: -0.23,
        duration:1,
        ease:"power2.inOut"
    },0)
    timeline9.to(OrbitControl.target,{
        x: 0.05, y: 0.02, z: 0.02,
        duration:1,
        ease:"power2.inOut"
    },0)
    timeline9.add(translucent('camera',9),0)
}
function scrollToPage8(){
    // Camera Position - x: -0.27, y: 0.24, z: -0.05
    // Camera Rotation - x: 0.06, y: 0.75, z: -0.04
    // OrbitControl Target - x: -0.48, y: 0.26, z: -0.27
    const timeline = gsap.timeline();
    timeline.to(camera.position,{
        x: -0.28,
        y: 0.26,
        z: -0.04,
        duration:1,
        ease:"power2.inOut"
    },0)
    timeline.to(camera.rotation,{
        x: 0.09, y: 0.76, z: -0.06,
        duration:1,
        ease:"power2.inOut"
    },0)
    timeline.to(OrbitControl.target,{
        x: -0.49, y: 0.28, z: -0.26,
        duration:1,
        ease:"power2.inOut"
    },0)
    timeline.add(translucent('vtx',8),0)
}
function scrollToPage7(){
    // camera Position - x: -0.61, y: 0.21, z: 0.17
    // camera Rotation - x: 0.94, y: -1.30, z: 0.93
    // orbitcontrol Target - x: -0.39, y: 0.25, z: 0.13
    const timeline = gsap.timeline();
    timeline.to(camera.position,{
        x: -0.61,
        y: 0.21,
        z: 0.17,
        duration:1,
        ease:"power2.inOut"
    },0)
    timeline.to(camera.rotation,{
        x: 0.94, y: -1.30, z: 0.93,
        duration:1,
        ease:"power2.inOut"
    },0)
    timeline.to(OrbitControl.target,{
        x: -0.39, y: 0.25, z: 0.13,
        duration:1,
        ease:"power2.inOut"
    },0)
    timeline.to(bottomLight,{
        intensity: 150,
        duration: 0.6,
        ease:"power2.inOut"
    })
    timeline.add(translucent('lipo',7),0)
}
function scrollToPage6(){
    const timeline = gsap.timeline();
    timeline.to(camera.position,{
        x: -0.40,
        y: 0.06,
        z: -0.21,
        duration:1,
        ease:"power2.inOut"
    },0)
    timeline.to(camera.rotation,{
        x: 1.88, y: 0.58, z: -2.10,
        duration:1,
        ease:"power2.inOut"
    },0)
    timeline.to(OrbitControl.target,{
        x: -0.45, y: 0.14, z: -0.18,
        duration:1,
        ease:"power2.inOut"
    },0)
    timeline.to(bottomLight,{
        intensity: 20,
        duration: 0.6,
        ease:"power2.inOut"
    })
    timeline.add(translucent('reciever',6),0)

}
function scrollToPage5(){
    // Camera Position - x: -0.31, y: 0.21, z: 0.07
    // Camera Rotation - x: -0.66, y: 0.60, z: 0.41
    // OrbitControl Target - x: -0.39, y: 0.14, z: -0.01
    const moveAndRotate = gsap.timeline();
    moveAndRotate.to(camera.position, {
        x:-0.30,
        y:0.15,
        z:0.12,
        duration: 0.7,
        ease: "power2.inOut",
    },0)
    moveAndRotate.to(camera.rotation,{
        x : -0.18,
        y: 0.55,
        z: 0.09,
        duration:0.7,
        ease:"power2.inOut",
    },0)
    moveAndRotate.to(OrbitControl.target, {
        x:-0.47,
        y:0.10,
        z:-0.16,
        duration: 0.7,
        ease: "power2.inOut",
        },0
    )
    moveAndRotate.to(bottomLight,{
        intensity: 20,
        duration: 0.6,
        ease:"power2.inOut"
    })
    moveAndRotate.add(translucent('stk',5),0);
}
function scrollToPage4(){
    const moveAndRotate = gsap.timeline();
    moveAndRotate.to(camera.position, {
        x:-0.2,
        y:0.35,
        z:0.07,
        duration: 0.7,
        ease: "power2.inOut",
    },0)
    // camera rotation - x: -0.89, y: -0.31, z: -0.36
    // orbitcontrol Target - x: -0.11, y: 0.12, z: -0.15
    moveAndRotate.to(camera.rotation,{
        x : -0.76,
        y: -0.26,
        z: -0.24,
        duration:0.7,
        ease:"power2.inOut",
    },0)
    moveAndRotate.to(OrbitControl.target, {
        x:-0.12,
        y:0.15,
        z:-0.14,
        duration: 0.7,
        ease: "power2.inOut",
        },0
    )
    moveAndRotate.add(translucent('prop',4),0)  

}
function scrollToPage3(){
    console.log(model.children[5].position)
    console.log(model)
    // console.log(motors[2].position)
    // console.log(motors[2].position)
    // console.log(motors[2].position)
    // controlFlag = false;
    const moveAndRotate = gsap.timeline();
    moveAndRotate.to(camera.position, {
        x:-0.16,
        y:0.29,
        z:0.01,
        duration: 1,
        ease: "power2.inOut",
        onStart:()=>{
            // camera.lookAt(model.children[5].position);
        },
        onUpdate: ()=>{
            // camera.lookAt(model.children[5].position);
        },
    },0)
    // -0.20, y: 0.24, z: 0.05
    moveAndRotate.to(camera.rotation,{
        x : -0.40,
        y: 0.19,
        z: 0.45,
        duration:1,
        ease:"power2.inOut",
    },0)

    // 0.3-0.22
    // -0.14, y: 0.29, z: 0.07

    moveAndRotate.to(OrbitControl.target, {
        x:-0.20,
        y:0.21,
        z:-0.17,
        duration: 1,
        ease: "power2.inOut",
        },0
    )
    moveAndRotate.to(model.position,{
        x:-0.47,
        duration:1,
        ease:"power2.inOut",
    },0)
    moveAndRotate.add(translucent('motor00',3),0)
}
let page2Scrolled = false;
function scrollToPage2() {
    controlFlag=true;
    stopRotation = true;
    const moveAndRotate = gsap.timeline();
    const moveUpTween = moveAndRotate
    .to(camera.position, {
        x: -0.3,
        y: 0.2,
        z: 0.45,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete:translucent('frame',2),
    },0.1)
    .to(OrbitControl.target, {
        x:0.5,
        y:0,
        z:0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete:()=>{
            console.log(camera.rotation)
        }
    },0.1)
    .to(model.position,{
        x:0,
        y:0.1,
        z:0,
        duration:0.6,
        ease:"power2.inOut",
    },0.1)
    //isEuler: true, _x: -0.4181381477973226, _y: -1.0189288510564705, _z: -0.36172840451767685
    .to(camera.rotation,{
        x : -0.418,
        y: -1.0189,
        z: -0.3617,
        duration:0.6,
        ease:"power2.inOut",
    },0.1)
    // moveAndRotate.add(translucent('frame'),0.5);
    // if(hasTransitioned) page2Scrolled = false;
    
}
let page1Scrolled = false;
function scrollToPage1() {
    controlFlag=true;
    stopRotation = false;
    const moveAndRotate = gsap.timeline();
    moveAndRotate.to(camera.position, {
        x: 0,
        y: 0,
        z:0.7,
        duration: 0.6,
        ease: "power2.out",
    },0);
    moveAndRotate.to(OrbitControl.target, {
        x:0,
        duration: 0.6,
        ease: "power2.out",
    },0);
    
    translucent('none',1);

    animateDrone();
    rotateProps();
}
let isScrolling = false;
function lightUp(ind){
    const labels = document.querySelectorAll('.label');
    labels.forEach((label,index)=>{
        if(ind===index){
            // gsap for opacity 1 and scale 1.2
            gsap.to(label,{
                opacity:1,
                scale:1.2,
                duration:0.05,
                ease:"power2.inOut",
            })
        }
        else{
            // gsap for opacity 0.5 and scale 1
            gsap.to(label,{
                opacity:0.2,
                scale:1,
                duration:0.05,
                ease:"power2.inOut",
            })
        }
    })
}
const sections = document.querySelectorAll('.scroll-area');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const sectionId = entry.target.id;
            console.log(sectionId)
            switch (sectionId) {
                case 'page-1':
                    scrollToPage1();
                    lightUp(0);
                    break;
                case 'page-2':
                    scrollToPage2();
                    lightUp(1);
                    break;
                case 'page-3':
                    scrollToPage3();
                    lightUp(2);
                    break;
                case 'page-4':
                    scrollToPage4();
                    lightUp(3);
                    break;
                case 'page-5':
                    scrollToPage5();
                    lightUp(4);
                    break;
                case 'page-6':
                    scrollToPage6();
                    lightUp(5);
                    break;
                case 'page-7':
                    scrollToPage7();
                    lightUp(6);
                    break;
                case 'page-8':
                    scrollToPage8();
                    lightUp(7);
                    break;
                case 'page-9':
                    scrollToPage9();
                    lightUp(8);
                    break;
                // Add more cases for other sections as needed
                default:
                    break;
            }
        }
    });
}, { threshold: 0.5 });

// Select all sections

// Observe each section
sections.forEach((section) => {
    observer.observe(section);
});


// -------------------------------------SCROLL PAGES TRANSITION END-------------------------

function easeOut(x){
    // return (1-Math.cos(x*Math.PI))/2;
    return (Math.sin(x*Math.PI/2));
}

//----------------------------------------SCROLL HANDLING----------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.scroll-area');
    if (sections.length > 0) {
        const scrollContainer = document.querySelector('.scroll-container');
        scrollContainer.addEventListener('scroll', function(e) {
            // console.log(globalActiveSection, globalPrevSection);
            hasTransitioned = false;
            // console.log(e)
            const scrollPos = Math.ceil(this.scrollTop);
            let activeSection = 0;
            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                // console.log(section.id, section.offsetTop, section.offsetHeight , scrollPos)

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    activeSection = index + 1;
                    hasTransitioned = scrollPos == sectionTop+1 || scrollPos == sectionTop - 1 || scrollPos == sectionTop;
                    // console.log(scrollPos, sectionTop, hasTransitioned)
                    // console.log(typeof(scrollPos), sectionTop, hasTransitioned)
                }
            });
            // globalActiveSection = activeSection;
            const isScrollingUp = scrollPos < lastScrollPos;
            isTransitioningUp = isScrollingUp;
            isTransitioningDown = !isScrollingUp;
            lastScrollPos = scrollPos;
            // console.log(isTransitioningUp, isTransitioningDown, activeSection,hasTransitioned)
            // console.log( activeSection)
            if(globalActiveSection == 1  && globalPrevSection == 2){
                const mouseScroll = document.getElementById("mouseScroll");
                gsap.to(mouseScroll, {
                    opacity: 1,
                    duration: 2,
                    ease: "power2.easeInOut",
                });
            }
            if(globalPrevSection == 1){
                const mouseScroll = document.getElementById("mouseScroll");
                gsap.to(mouseScroll, {
                    opacity: 0,
                    duration: 0.05,
                    ease: "power2.easeInOut",
                });
            }
            if( globalActiveSection !=1){
                const mouseScroll = document.getElementById("mouseScroll");
                gsap.to(mouseScroll, {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.easeIn",
                });
            }
            // animate everything based on scrollPos

            bubbleTransition(globalActiveSection);
        });
    }
    bubbleTransition(globalActiveSection);
});
//----------------------------------------SCROLL HANDLING END----------------------------------------------

//----------------------------------------RayCasting----------------------------------------------
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
function onClick(event) {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(model.children, true);

    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;

        // Here you can check the clicked object's name or properties to perform specific actions
        console.log('Clicked on a motor:', clickedObject.name);
    }
}

modelLoadedPromise.then(() => {
    document.addEventListener('click', onClick);
    // window.addEventListener('mousemove', onMouseMove);
});
//----------------------------------------RayCasting END----------------------------------------------
animateDrone();
// resize event listenr 
scrollBar();
// setupPosition();
window.addEventListener("resize", () =>{
    scrollBar();
    // setupPosition();
});
toggleState();
syncScroll();

const frameInterval = 1000 / 60;
let lastRenderTime = 0;
let frames = 0;
let controlFlag = true;
function tick() {
    if(controlFlag){
        OrbitControl.update();
    }
    const currentTime = Date.now();
    if (currentTime - lastRenderTime > frameInterval) {
        renderer.render(scene, camera);
        lastRenderTime = currentTime;
        frames++;
    }
    requestAnimationFrame(tick);
}

tick();



let lastScrollTime = 0;
const scrollDelay = 5000; // Adjust the delay time as needed (in milliseconds)

document.querySelector('.scroll-container').addEventListener('scroll', function(event) {
  const currentTime = new Date().getTime();
  if (currentTime - lastScrollTime > scrollDelay) {
    // Allow snap scroll after the delay
    lastScrollTime = currentTime;
    const currentScrollPos = this.scrollTop;
    const sectionHeight = this.clientHeight;

    // Logic to scroll one section based on scroll direction
    const targetSection = Math.floor((currentScrollPos + sectionHeight / 2) / sectionHeight);
    this.scrollTo({
      top: targetSection * sectionHeight,
      behavior: 'smooth'
    });
  }
});


// let scrollTimeout = false;
function scrollTrigger(){
    const container = document.querySelector('.scroll-container');
    const sections = gsap.utils.toArray('.scroll-area');
    sections.forEach((section,index) => {
        ScrollTrigger.create({
            trigger: section,
            scroller: container,
            start: "top center",
            end: "bottom center",
            // scrub:true,
            toggleClass: {
                targets: section,
                className: "active-section"
            },
            onEnter: () => {
                const sectionId = section.id;
                // console.log("Section entered:",sectionId);
                globalActiveSection = index+1;
                // console.log(globalActiveSection);
                // animate
            },
            onLeave: () => {
                const sectionId = section.id;
                globalPrevSection = index+1;
                // console.log("Section left:",sectionId);
            },
            onEnterBack: () => {
                const sectionId = section.id;
                // console.log("Section entered:",sectionId);
                globalActiveSection = index+1;
                // console.log(globalActiveSection);
                // animate
            },
            onLeaveBack: () => {
                const sectionId = section.id;
                globalPrevSection = index+1;
                // console.log("Section left:",sectionId);
            },
        });
        const sectionCameraAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                scrub: true, // Enables smooth scrubbing effect
            },
        });
    });
};
    // const snapPoints = 1 / (sections.length-1);

    // ScrollTrigger.create({
    //     scroller: container,
    //     snap: {
    //         snapTo: snapPoints,
    //         duration: 0.5 // Adjust duration as needed
    //     },
    // });
    // onSnapComplete: (scroll) => {
    //     scrollTimeout = true;
    //     setTimeout(() => {
    //         scrollTimeout = false;
    //     }, 500);
    // }