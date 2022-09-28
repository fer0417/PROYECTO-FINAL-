const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window, innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate(){
    requestAnimationFrame(animate);
	renderer.render(scene,camera);
}
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x108770 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

animate();
camera.position.z = 0;
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.00;
    cube.rotation.y += 0.00;
	renderer.render( scene, camera );
}
animate();

cube.position.x = 2;
cube.position.y = -2;
cube.position.z = 4;

cube.rotation.x = 4;
cube.rotation.y = 3;
cube.rotation.z = 0;