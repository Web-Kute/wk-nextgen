// import * as THREE from "/node_modules/three/build/three.module.js";

// import { PlaneGeometry } from "three/build/three.module";
import {
  PerspectiveCamera,
  MeshStandardMaterial,
  MeshBasicMaterial,
  WebGLRenderer,
  Scene,
  Mesh,
  BoxGeometry,
  AxesHelper,
  PlaneGeometry,
  GridHelper
} from "/node_modules/three/build/three.module.js";

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

const planeGeometry = new PlaneGeometry(5,5);
const planeMaterial = new MeshBasicMaterial({color: 0xffffff});
const plane = new Mesh(planeGeometry, planeMaterial);
plane.rotation.x =  -0.5 * Math.PI
// scene.add(plane)

const geometry = new BoxGeometry(2, 2, 2);
const material = new MeshBasicMaterial({
  color: 0xda2e35,
  wireframe: true,
});
const cube = new Mesh(geometry, material);
scene.add(cube);

const geometryIn = new BoxGeometry(1, 1, 1);
const materialIn = new MeshBasicMaterial({
  color: 0xda2e35,
  wireframe: true,
});
const cubeIn = new Mesh(geometryIn, materialIn);
scene.add(cubeIn);

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

function animateIn() {
  cubeIn.rotation.x += 0.03;
  cubeIn.rotation.y += 0.03;
  requestAnimationFrame(animateIn);
  renderer.render(scene, camera);
}
animateIn();

const axesHelper = new AxesHelper(5);
scene.add(axesHelper);

const gridHelper = new GridHelper(5);
scene.add(gridHelper);