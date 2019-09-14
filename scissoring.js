var scene = new THREE.Scene();
//var camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth / 2, window.innerHeight / 2 );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.WireframeGeometry();
var vertices = new Float32Array( [
	-0.5, -0.5,  0.0,
	 0.5, -0.5,  0.0,
	 0.5,  0.5,  0.0,
] );

geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
var shaderMaterial = new THREE.ShaderMaterial( {
  uniforms: {

    time: { value: 1.0 },
    resolution: { value: new THREE.Vector2() }

  },

  vertexShader: document.getElementById( 'vertexShader' ).textContent,
  fragmentShader: document.getElementById( 'fragmentShader' ).textContent
} );
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

camera.position.z = 10;

var animate = function () {
  requestAnimationFrame( animate );

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();
