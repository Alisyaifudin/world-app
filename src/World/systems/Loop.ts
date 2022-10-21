import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { Object } from "../global";

const clock = new Clock();

class Loop {
	private camera: PerspectiveCamera;
	private scene: Scene;
	private renderer: WebGLRenderer;
  private updatables: Object[] = [];

	constructor(camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer) {
		this.camera = camera;
		this.scene = scene;
		this.renderer = renderer;
	}
  push(object: Object) {
    this.updatables.push(object)
  }
	start() {
		this.renderer.setAnimationLoop(() => {
      this.tick();
			this.renderer.render(this.scene, this.camera);
		});
	}
	stop() {
    this.renderer.setAnimationLoop(null);
  }
  tick() {
		const delta = clock.getDelta();
    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
}

export { Loop };
