
import * as dat from 'dat.gui';
export function gui(rightLight, leftLight, frontLight, bias, far, near){
    const gui = new dat.GUI();
    // Create an object to hold the light's properties for dat.GUI
    const rightLightProperties = {
        color: rightLight.color.getHex(),
        intensity: rightLight.intensity,
        positionX: rightLight.position.x,
        positionY: rightLight.position.y,
        positionZ: rightLight.position.z,
    };
    const rightFolder = gui.addFolder('Right Light Properties');
    rightFolder.addColor(rightLightProperties, 'color').onChange((value) => {
        rightLight.color.setHex(value);
    });
    rightFolder.add(rightLightProperties, 'intensity', 0, 100).onChange((value) => {
        rightLight.intensity = value;
    });
    rightFolder.add(rightLightProperties, 'positionX', -20, 20).onChange((value) => {
        rightLight.position.x = value;
    });
    rightFolder.add(rightLightProperties, 'positionY', -20, 20).onChange((value) => {
        rightLight.position.y = value;
    });
    rightFolder.add(rightLightProperties, 'positionZ', -20, 20).onChange((value) => {
        rightLight.position.z = value;
    });
    const leftLightProperties = {
        color: leftLight.color.getHex(),
        intensity: leftLight.intensity,
        positionX: leftLight.position.x,
        positionY: leftLight.position.y,
        positionZ: leftLight.position.z,
    };
    const leftFolder = gui.addFolder('Left Light Properties');
    leftFolder.addColor(leftLightProperties, 'color').onChange((value) => {
    leftLight.color.setHex(value);
    });
    leftFolder.add(leftLightProperties, 'intensity', 0, 100).onChange((value) => {
    leftLight.intensity = value;
    });
    leftFolder.add(leftLightProperties, 'positionX', -20, 20).onChange((value) => {
    leftLight.position.x = value;
    });
    leftFolder.add(leftLightProperties, 'positionY', -20, 20).onChange((value) => {
    leftLight.position.y = value;
    });
    leftFolder.add(leftLightProperties, 'positionZ', -20, 20).onChange((value) => {
    leftLight.position.z = value;
    });


    const frontLightProperties = {
        color: frontLight.color.getHex(),
        intensity: frontLight.intensity,
        positionX: frontLight.position.x,
        positionY: frontLight.position.y,
        positionZ: frontLight.position.z,
    };
    const frontFolder = gui.addFolder('Front Light Properties');
    frontFolder.addColor(frontLightProperties, 'color').onChange((value) => {
    frontLight.color.setHex(value);
    });
    frontFolder.add(frontLightProperties, 'intensity', 0, 100).onChange((value) => {
        frontLight.intensity = value;
    });
    frontFolder.add(frontLightProperties, 'positionX', -20, 20).onChange((value) => {
        frontLight.position.x = value;
    });
    frontFolder.add(frontLightProperties, 'positionY', -20, 20).onChange((value) => {
        frontLight.position.y = value;
    });
    frontFolder.add(frontLightProperties, 'positionZ', -20, 20).onChange((value) => {
        frontLight.position.z = value;
    });


    const biasFolder = gui.addFolder('Shadow');
    biasFolder.add({ bias: 0 }, 'bias', 0, 1).onChange((value) => {
        rightLight.shadow.bias = value;
        leftLight.shadow.bias = value;
        frontLight.shadow.bias = value;
    });
    
    biasFolder.add({ near: near }, 'near', 0, 50).onChange((value) => {
        rightLight.shadow.camera.near = value;
        leftLight.shadow.camera.near = value;
        frontLight.shadow.camera.near = value;
    });
    
    biasFolder.add({ far: far }, 'far', 0, 500).onChange((value) => {
        rightLight.shadow.camera.far = value;
        leftLight.shadow.camera.far = value;
        frontLight.shadow.camera.far = value;
    });
    
}