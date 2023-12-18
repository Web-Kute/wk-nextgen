// import * as THREE from "/node_modules/three/build/three.module.js";

import {
  PerspectiveCamera,
  MeshStandardMaterial,
  MeshBasicMaterial,
  WebGLRenderer,
  Scene,
  Mesh,
  BoxGeometry,
  AxesHelper,
  
} from "/node_modules/three/build/three.module.js";

// import { OrbitControls } from "/node_modules/three/jsm/controls/OrbitControls.js";
// import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls.js";

import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls.js";

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);


const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.body.appendChild(renderer.domElement);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({
    color: 0xda2e35,
});
const cube = new Mesh(geometry, material);
scene.add(cube);

const axesHelper = new AxesHelper(5);
scene.add(axesHelper);

// camera.position.z = 5;
// camera.position.y = 1;
// camera.position.x = 3;
const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 2, 5);
orbit.update()
renderer.setPixelRatio(window.devicePixelRatio);

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
