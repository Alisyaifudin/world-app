import { Mesh, Object3D } from "three";

export {}

declare global {
  interface Object extends Object3D {
    tick(delta?: number): void;
  }
  interface MeshWT extends Mesh {
    tick(delta?: number): void;
  }
}