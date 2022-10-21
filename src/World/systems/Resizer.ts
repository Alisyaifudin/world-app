const setSize = (
	container: HTMLElement,
	camera: THREE.PerspectiveCamera,
	renderer: THREE.WebGLRenderer
) => {
	const { clientWidth, clientHeight } = container;

	camera.aspect = clientWidth / clientHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(clientWidth, clientHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
};
class Resizer {
	constructor(
		container: HTMLElement,
		camera: THREE.PerspectiveCamera,
		renderer: THREE.WebGLRenderer
	) {
		setSize(container, camera, renderer);
		window.addEventListener("resize", () => {
			setSize(container, camera, renderer);
			this.onResize();
		});
	}
	onResize() {}
}

export { Resizer };
