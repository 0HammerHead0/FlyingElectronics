import './style.css'
import { setupPosition } from './ext-scripts/position.js'
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



const container = document.querySelector('.webgl-content');
const sizes = {
    width: container.clientWidth * 1,
    height: container.clientHeight * 1
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
const canvas = document.querySelector('.webgl');
const OrbitControl = new OrbitControls(camera, canvas);
OrbitControl.enableDamping = true;
OrbitControl.minDistance = 0.45;
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas:canvas , alpha: true });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.needsUpdate = true;
renderer.setSize(sizes.width, sizes.height);
const axesHelper = new THREE.AxesHelper();
camera.position.set(0 , 0, 0.7);
const scene = new THREE.Scene();
// scene.add(axesHelper);


window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


var model_loaded = false;
var model;
var props=[];
var motors = [];

const gltfLoader = new GLTFLoader();

gltfLoader.load(
    'models/drone.glb',
    (gltf) => {
        model = gltf.scene;
        model.rotateY(Math.PI);
        model.scale.set(10,10,10);
        console.log(model);
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
            }
        });
        scene.add(model);
        initLight(leftLight);
        initLight(rightLight);
        initLight(frontLight);
        model_loaded=true;
    },
    (xhr) => {
        const progress = (xhr.loaded / xhr.total).toFixed(2);
        // const ldBarElement = document.querySelector('.ldBar');
        // ldBarElement.setAttribute('data-value', progress * 100); // Update ldBar value
    },
    (error) => {
        console.log('error', error);
    }
);
const droneBoundingSphere = new THREE.Sphere();
var droneBoundingBox ;
const shadowRes = 2048;
const  near = 0;
const far = 500;
const bias = -0.00001;
function initLight(light) {
    droneBoundingBox = new THREE.Box3().setFromObject(model); // Replace droneObject with your drone's Three.js object
    light.castShadow = true;
    light.shadow.bias = bias;
    light.shadow.mapSize.width = shadowRes;
    light.shadow.mapSize.height = shadowRes;
    light.shadow.camera.near = 1 // Adjust near to the size of your object
    light.shadow.camera.far = 100 ;
    light.shadow.camera.left = droneBoundingBox.min.x;
    light.shadow.camera.right = droneBoundingBox.max.x;
    light.shadow.camera.top = droneBoundingBox.max.y;
    light.shadow.camera.bottom = droneBoundingBox.min.y;
    light.target = model;
    scene.add(light);
}


const leftLight = new THREE.DirectionalLight(0xffffff, 10);
leftLight.position.set(-20, 20, 20);


const rightLight = new THREE.DirectionalLight(0xffffff, 8);
rightLight.position.set(20, 20, -20);

const frontLight = new THREE.DirectionalLight(0xffffff, 10);
frontLight.position.set(10,2,10);


gui(rightLight, leftLight,frontLight,bias,far,near);


const propellerScene = new THREE.Scene();
props.forEach((propeller) => {
    propellerScene.add(propeller);
});
// Post-processing inits
const composer = new EffectComposer(renderer);

// render pass
const renderPass = new RenderPass(scene, camera);

const renderTargetParameters = {
	minFilter: THREE.LinearFilter,
	magFilter: THREE.LinearFilter,
	stencilBuffer: false
};
// save pass
const savePass = new SavePass(
	new THREE.WebGLRenderTarget(
		container.clientWidth,
		container.clientHeight,
		renderTargetParameters
	)
);

// blend pass
const blendPass = new ShaderPass(BlendShader, "tDiffuse1");
blendPass.uniforms["tDiffuse2"].value = savePass.renderTarget.texture;
blendPass.uniforms["mixRatio"].value = 0.8;

// output pass
const outputPass = new ShaderPass(CopyShader);
outputPass.renderToScreen = true;

// adding passes to composer
composer.addPass(renderPass);
composer.addPass(blendPass);
composer.addPass(savePass);
composer.addPass(outputPass);

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
modelLoadedPromise.then(() => {
    const ind=4
    model.traverse((child) => {
        try{
            if (child.isMesh) {
                // Check and modify the opacity of each mesh's material
                child.material.opacity = 0.1; // Example: set opacity to 0.5 for all materials
            }
            if (child.name.startsWith('stk')){
                child.material.opacity = 1;
                child.receiveShadow = false;
                child.castShadow = false;
            }
        }
        catch(e)
        {
            console.log(child.name)
            console.log(e);
        }
    });
    // motors[ind].material.opacity = 1;
    // motors[ind+1].material.opacity = 1;
});
setupPosition();
var time = Date.now();
function tick(){
    const currentTime = Date.now();
    time = currentTime;
    OrbitControl.update();
    renderer.render(scene, camera);
    if (model_loaded) {
        props.forEach((propeller) => {
            propeller.rotateY(0.085);
        });
    }
    // composer.render();
    requestAnimationFrame(tick);
}
tick();