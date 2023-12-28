import './style.css'
import { setupPosition } from './ext-scripts/position.js'
import * as THREE from 'three';
import  {gui} from './ext-scripts/gui.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import gsap from 'gsap';

const container = document.querySelector('.webgl-content');
const sizes = {
  width: container.clientWidth * 1,
  height: container.clientHeight * 1
};
// console.log(THREE.REVISION); 
const scene = new THREE.Scene();
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
scene.add(axesHelper);

var model;
const gltfLoader = new GLTFLoader();
gltfLoader.load(
    'models/drone.glb',
    (gltf) => {
        model = gltf.scene;
        model.rotateY(Math.PI);
        model.scale.set(10,10,10);
        model.traverse((child) => {
          if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
          }
        });
        scene.add(model);
        initLight(leftLight);
        initLight(rightLight);
        initLight(frontLight);
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

// post processign
// const composer = new EffectComposer(renderer);
// const renderPass = new RenderPass(scene, camera);
// composer.addPass(renderPass);

// const fxaaPass = new ShaderPass(FXAAShader);
// fxaaPass.uniforms['resolution'].value.set(1 / sizes.width, 1 / sizes.height);
// composer.addPass(fxaaPass);


setupPosition();
var time = Date.now();
function tick(){
    const currentTime = Date.now();
    time = currentTime;
    OrbitControl.update();
    renderer.render(scene, camera);
    // composer.render();
    requestAnimationFrame(tick);
}
tick();