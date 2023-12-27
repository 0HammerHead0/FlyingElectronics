const minDistance = 5; // Minimum distance allowed between camera and model

controls.addEventListener('change', () => {
    const cameraPosition = controls.object.position.clone();
    const modelPosition = model.position.clone();

    const distance = cameraPosition.distanceTo(modelPosition);

    if (distance < minDistance) {
        // Adjust the camera's position or prevent further movement
        // For instance:
        const direction = cameraPosition.sub(modelPosition).normalize();
        const newCameraPos = modelPosition.clone().add(direction.multiplyScalar(minDistance));
        controls.object.position.copy(newCameraPos);
    }
});