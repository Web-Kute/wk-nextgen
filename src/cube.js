// https://discourse.threejs.org/t/how-to-add-solid-border-into-cube-edge-in-three-js/47878

import {
  PerspectiveCamera,
  MeshStandardMaterial,
  MeshBasicMaterial,
  MeshLambertMaterial,
  WebGLRenderer,
  Scene,
  Mesh,
  BoxGeometry,
  AxesHelper,
  PlaneGeometry,
  GridHelper,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
  AmbientLight,
  DirectionalLight,
  Color,
  CanvasTexture,
  MeshPhongMaterial,
} from "/node_modules/three/build/three.module.js";

import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls.js";
import { TextGeometry } from "/node_modules/three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "/node_modules/three/examples/jsm/loaders/FontLoader.js";

const scene = new Scene();

scene.background = new Color("white");

const camera = new PerspectiveCamera(30, innerWidth / innerHeight);
camera.position.set(0, 0, 10);
camera.lookAt(scene.position);

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.setAnimationLoop(animationLoop);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", (event) => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

const ambientLight = new AmbientLight("white", 1.5);
scene.add(ambientLight);

const light = new DirectionalLight("white", 1.5);
light.position.set(1, 1, 1);
scene.add(light);

// a cnavas where the borders of the cube will be drawn

const canvas = document.createElement("CANVAS");
canvas.width = 512;
canvas.height = 512;

// procedurally defining of a thick black border with tan interior

const context = canvas.getContext("2d");

context.fillStyle = "rgba(255, 255, 255, 0.1)";
context.fillRect(0, 0, 512, 512);
context.strokeStyle = "#ff0000";
context.lineWidth = 32;
context.strokeRect(16, 16, 512 - 32, 512 - 32);

// a cube with a texture from the canvas image
const cube = new Mesh(
  new BoxGeometry(3, 3, 3),
  new MeshLambertMaterial({ map: new CanvasTexture(canvas), transparent: true })
);
cube.rotation.x = 0;
cube.rotation.y = 0.2;
cube.rotation.z = 0.8;

cube.scale.set(0.3, 0.3, 0.3);
scene.add(cube);

const cubeIn = new Mesh(
  new BoxGeometry(1.6, 1.6, 1.6),
  new MeshLambertMaterial({ map: new CanvasTexture(canvas) })
);
cubeIn.rotation.x = 0;
cubeIn.rotation.y = 0.2;
cubeIn.rotation.z = 0.8;
cubeIn.position.y = -0.06;
cubeIn.scale.set(0.25, 0.25, 0.25);
scene.add(cubeIn);

function animationLoop(t) {
  // cube.rotation.x = Math.sin(t / 55700);
  // cube.rotation.y = Math.sin(t / 51200);
  cubeIn.rotation.x = Math.sin(t / 21700);
  cubeIn.rotation.y = Math.sin(t / 22200);

  // requestAnimationFrame(animationLoop);
  renderer.render(scene, camera);
}

const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(2, 2, 10);
orbit.update();

const loader = new FontLoader();

loader.load(
  "/node_modules/three/examples/fonts/helvetiker_bold.typeface.json",
  function (font) {
    const geometry = new TextGeometry("Jim", {
      font: font,
      size: 12,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelOffset: 0,
      bevelSegments: 5,
    });
    const textMaterial = new MeshPhongMaterial({ color: 0xff0000 });

    const mesh = new Mesh(geometry, textMaterial);
    mesh.position.set(0, 0, 0);

    // scene.add(mesh);
  }
);


const axesHelper = new AxesHelper(5);
// scene.add(axesHelper);

