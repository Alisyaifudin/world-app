import {
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
	BoxGeometry,
	Color,
	Mesh,
	MeshBasicMaterial,
} from "three";

const container = document.getElementById("scene-container");
if(!container) throw Error("Container not found");

