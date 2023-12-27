
import * as dat from 'dat.gui';
export function gui(rightLight, leftLight){
    const gui = new dat.GUI();
    // Create an object to hold the light's properties for dat.GUI
    const rightLightProperties = {
        color: rightLight.color.getHex(),
        intensity: rightLight.intensity,
        positionX: rightLight.position.x,
        positionY: rightLight.position.y,
        positionZ: rightLight.position.z,
        // Add other properties you want to control
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
}