//fondo
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x33D7FF); 

var loader = new  THREE.TextureLoader();
loader.load(
    '../imagenes/fondo.png', function(texture){
     scene.background = texture;
    }
);

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Nube
const gltfLoader = new THREE.GLTFLoader();

const directionalLight2 = new THREE.AmbientLight(0xFFFFFF);
scene.add(directionalLight2);

gltfLoader.load('../nubes_ta/scene.gltf', 
(gltf) =>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(12,12,12);
    loaderObjeto.position.x = -100;
    loaderObjeto.position.y = 60;
    loaderObjeto.position.Z = 0;
    console.log('carga completa');
    scene.add(loaderObjeto); 
    
    const controls1 = new THREE.DragControls( [loaderObjeto], camera, renderer.domElement );
    
    
}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);

//Bus
const gltfLoader2 = new THREE.GLTFLoader();

gltfLoader.load('../isuzu_erga_mio_bus/scene.gltf', 
(gltf) =>{
    var loaderObjeto2 = gltf.scene;
    loaderObjeto2.scale.set(1.5,1.5,1.5)
    console.log('carga completa');
    scene.add(loaderObjeto2);
    loaderObjeto2.position.x = -40;
    loaderObjeto2.position.y = -60;
    loaderObjeto2.position.z = 0;
    const controls2 = new THREE.DragControls( [loaderObjeto2], camera, renderer.domElement );
    const directionalLight2 = new THREE.AmbientLight2(0xFFFFFF)
    scene.add(directionalLight2)
    
    
}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);

//Persona
const gltfLoader3 = new THREE.GLTFLoader();

gltfLoader.load('../makoto_yukiminato_arisato_persona_3/scene.gltf', 
(gltf) =>{
    var loaderObjeto3 = gltf.scene;
    loaderObjeto3.scale.set(0.3,0.3,0.3)
    console.log('carga completa');
    scene.add(loaderObjeto3);
    loaderObjeto3.position.x = 70;
    loaderObjeto3.position.y = -50;
    loaderObjeto3.position.z = 0;
    const controls3 = new THREE.DragControls( [loaderObjeto3], camera, renderer.domElement );
    const directionalLight3 = new THREE.AmbientLight3(0xFFFFFF)
    scene.add(directionalLight3)
    
    
}, ()=>{
    console.log('cargando');
}, ()=>{
    console.log('error')
}
);

camera.position.z = 100
//animacion
function animate() {
    requestAnimationFrame( animate );

    renderer.render( scene, camera );
}
animate();