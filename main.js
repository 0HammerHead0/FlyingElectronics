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
        leftLight.target = model;
        rightLight.target = model;
        frontLight.target = model;
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
const shadowRes = 2048;
const  near = 0;
const far = 500;
const bias = 0.00;
const leftLight = new THREE.DirectionalLight(0xffffff, 5);
leftLight.position.set(-20, 20, 20);
leftLight.castShadow = true;
leftLight.shadow.bias = bias;
leftLight.shadow.mapSize.width = shadowRes;
leftLight.shadow.mapSize.height = shadowRes;
leftLight.shadow.camera.near = near;
leftLight.shadow.camera.far = far;
scene.add(leftLight);

const rightLight = new THREE.DirectionalLight(0xffffff, 8);
rightLight.position.set(20, 20, -10);
rightLight.castShadow = true;
rightLight.shadow.bias = bias;
rightLight.shadow.mapSize.width = shadowRes;
rightLight.shadow.mapSize.height = shadowRes;
rightLight.shadow.camera.near = near;
rightLight.shadow.camera.far = far;
scene.add(rightLight);

const frontLight = new THREE.DirectionalLight(0xffffff, 10);
frontLight.position.set(10,2,10);
frontLight.castShadow = true;
frontLight.shadow.bias = bias;
frontLight.shadow.mapSize.width = shadowRes;
frontLight.shadow.mapSize.height = shadowRes;
frontLight.shadow.camera.near = near;
frontLight.shadow.camera.far = far;
scene.add(frontLight);


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