import { BufferGeometry, Material, Mesh, Object3D } from "three";

class MeshWT extends Mesh {
  constructor(geometry: BufferGeometry, material: Material) {
    super(geometry, material);
  }
  tick(delta?: number) {}
}

class Object extends Object3D {
  tick(delta?: number) {}
}
export { MeshWT, Object };