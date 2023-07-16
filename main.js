import * as THREE from 'three'
import { FlyControls } from 'three/addons/controls/FlyControls.js';
import './style.css'

const container = document.querySelector('#app')
container.innerHTML = `<h1 class="title">Hello and welcome to Klajdi Bejko's sandbox.</h1>`

const clock = new THREE.Clock();
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 10, 15000)
camera.position.z = 100


const renderer =  new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
container.appendChild(renderer.domElement)

const pointLight = new THREE.PointLight( "hsl(33, 64%, 46%)", 3, 0, 0 );
pointLight.position.set( 0, 0, 0 );
scene.add( pointLight );

const dirLight = new THREE.DirectionalLight( "hsl(0, 0%, 61%)", 5 );
dirLight.position.set( 0, 0, 1 ).normalize();
scene.add( dirLight );

const geometry = [
	[ new THREE.IcosahedronGeometry( 100, 16 ), 100 ],
	[ new THREE.IcosahedronGeometry( 100, 4 ), 4000 ],
	[ new THREE.IcosahedronGeometry( 100, 1 ), 8000 ]
];
const material = new THREE.MeshLambertMaterial({ color: "hsl(0, 0%, 61%)", wireframe: true })

for( let j = 0; j < 1000; j++ ) {

	const lod = new THREE.LOD()

	for( let i = 0; i < geometry.length; i++ ) {
		const mesh = new THREE.Mesh(geometry[i][0], material)
		mesh.scale.set(1.5, 1.5, 1.5)
		mesh.updateMatrix()
		mesh.matrixAutoUpdate = false
		lod.addLevel(mesh, geometry[i][1])
	}
	
	lod.position.x = 10000 * ( 0.5 - Math.random() );
	lod.position.y = 1000 * ( 0.5 - Math.random() );
	lod.position.z = 10000 * ( 0.5 - Math.random() );
	lod.updateMatrix();
	lod.matrixAutoUpdate = false;
	scene.add( lod );
}

const controls = new FlyControls( camera, renderer.domElement );
controls.movementSpeed = 10000;
controls.rollSpeed = Math.PI / 25;

function animate() {
	requestAnimationFrame(animate)
	render()
}

function render() {
	controls.update(clock.getDelta());
	renderer.render(scene, camera)
}

animate()
