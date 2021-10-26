import * as THREE from './three.module.js';
import {OrbitControls} from './OrbitControls.js';

if (typeof textureUrl !== "undefined") {

    let camera, scene, renderer, cylinder, controls;
    
    const height = 500;
    const width = 500;

    init(textureUrl);

    function init(url) {

        camera = new THREE.PerspectiveCamera( 70, height / width, 0.01, 2000 );
        camera.position.z = 620;

        scene = new THREE.Scene();

        const geometry = new THREE.CylinderGeometry( 317, 317, 416, 50 );
        const loader = new THREE.TextureLoader();
            loader.load(url, (texture) => {
            const material = new THREE.MeshBasicMaterial({
                map: texture,
            });
            material.transparent = true;
            cylinder = new THREE.Mesh( geometry, material );
            scene.add( cylinder );

            renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
            renderer.setSize( height, width );
            renderer.setAnimationLoop( animation );
            document.getElementById('carousel-3D').appendChild( renderer.domElement );

            controls = new OrbitControls( camera, renderer.domElement );
            controls.autoRotate = true;
            controls.autoRotateSpeed = 2;
            controls.minPolarAngle = Math.PI / 2;
            controls.maxPolarAngle = Math.PI / 2;
            controls.mouseButtons = {
                LEFT: THREE.MOUSE.ROTATE,
                MIDDLE: THREE.MOUSE.ROTATE,
                RIGHT: THREE.MOUSE.ROTATE
            };
            controls.touches = {
                ONE: THREE.TOUCH.ROTATE,
                TWO: THREE.TOUCH.ROTATE
            };
            controls.zoomSpeed = 0;
            controls.update();

            renderer.domElement.addEventListener('pointerdown', rotate, false);
        });
    }

    function animation( time ) {

        controls.update();
        renderer.render( scene, camera );

    }
    
    let timer = null;

    function rotate() {
        controls.autoRotate = false;

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(function() {
            controls.autoRotate = true;
        }, 10000);      
    }
}