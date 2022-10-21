import { World } from "./World/World";

function main() {
	const container = document.getElementById("scene-container");
	if (!container) throw Error("No element with id 'scene-container' found");

	const world = new World(container);

	// world.render();
	world.start();
}

main();
