import { createCamera } from './components/camera';
import { createScene } from './components/scene';
import { createCube } from './components/cube';
import { createLight } from './components/lights';

import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';

class World {
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private renderer: THREE.WebGLRenderer;
  private loop: Loop;

  constructor(container: HTMLElement) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    this.loop = new Loop(this.camera, this.scene, this.renderer);

    container.append(this.renderer.domElement);

    const cube = createCube()
    const light = createLight()
    
    this.loop.push(cube)

    this.scene.add(light, cube);

    const resizer = new Resizer(container, this.camera, this.renderer);
    // resizer.onResize = () => {
    //   this.render()
    // }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
  start() {
    this.loop.start()
  }
  stop() {
    this.loop.stop()
  }
}

export { World };