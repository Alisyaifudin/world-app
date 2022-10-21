import { BoxGeometry, MeshStandardMaterial, MathUtils, Mesh } from "three";


function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshStandardMaterial({color: "purple"});
  const cube: MeshWT = new Mesh(geometry, material);
  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta = 0.001) => {
    cube.rotation.z += delta * radiansPerSecond;
    cube.rotation.y += delta * radiansPerSecond;
    cube.rotation.x += delta * radiansPerSecond;
  };

  return cube;
}

export { createCube };