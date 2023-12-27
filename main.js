import './style.css'
import { setupPosition } from './ext-scripts/position.js'
import * as THREE from 'three';
import  {gui} from './ext-scripts/gui.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
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
const renderer = new THREE.WebGLRenderer({ canvas , alpha: true });
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
        scene.add(model);
        leftLight.target = model;
        rightLight.target = model;
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

const leftLight = new THREE.DirectionalLight(0xffffff, 30);
leftLight.position.set(-20, 20, 20);
const rightLight = new THREE.DirectionalLight(0xffffff, 30);
rightLight.position.set(20, 20, -10);
scene.add(rightLight,leftLight);

gui(rightLight, leftLight,renderer);



setupPosition();
var time = Date.now();
function tick(){
    const currentTime = Date.now();
    time = currentTime;
    OrbitControl.update();
    requestAnimationFrame(tick);
    renderer.render(scene, camera);
}
tick();