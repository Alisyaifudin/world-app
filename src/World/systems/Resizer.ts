class Resizer {
  constructor(container: HTMLElement, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  }
}

export { Resizer };