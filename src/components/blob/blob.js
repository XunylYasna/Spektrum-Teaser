import React from 'react'
import { gsap } from 'gsap';
import * as $ from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


class Blob extends React.Component {
    componentDidMount() {
        // === THREE.JS CODE START ===
        const renderer = new $.WebGLRenderer({ antialias: false });
        const scene = new $.Scene();
        const camera = new $.PerspectiveCamera(75, 2, .1, 100);
        const controls = new OrbitControls(camera, renderer.domElement);
        window.addEventListener('resize', () => {
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight, false);
            camera.aspect = (window.innerWidth) / (window.innerHeight);
            camera.updateProjectionMatrix();
        });
        // document.body.prepend(renderer.domElement);
        this.mount.prepend(renderer.domElement);
        window.dispatchEvent(new Event('resize'));


        renderer.setAnimationLoop(function (t) {
            controls.update();
            renderer.render(scene, camera);
        });

        // ----
        // Main
        // ---- 

        scene.background = new $.Color('#fff');
        camera.position.set(0, 0, 5);
        // controls.autoRotate = true;
        // controls.autoRotateSpeed = 5;
        // controls.enableZoom = false;

        const light0 = new $.AmbientLight();
        scene.add(light0);

        const group = new $.Group();
        scene.add(group);

        const tex = new $.Texture();
        const geom = new $.SphereBufferGeometry(1, 1e3, 1e3, 0, Math.PI);
        const mat = new $.MeshStandardMaterial({ map: tex, displacementMap: tex });
        mat.color.set(0xffffff)
        const mesh1 = new $.Mesh(geom, mat);
        group.add(mesh1);

        const mesh2 = mesh1.clone();
        mesh2.scale.set(1, 1, -1);
        group.add(mesh2);



        function next(gen) {
            new $.TextureLoader().load(gen.next().value, (tex) => {
                gsap.timeline({ onComplete() { next(gen) }, defaults: { duration: 0.3 } })
                    .to(group.scale, { x: 1.5, y: 1.5, z: 1.5 })
                    .to(group.rotation, { x: Math.PI, y: Math.PI }, '<')
                    .to(mat, {
                        displacementScale: 0, onComplete() {
                            mat.color.set(0xffffff)
                            mat.map = tex;
                            mat.displacementMap = tex;
                        }
                    })
                    .to(mat, { displacementScale: 1 })
                    .to(group.scale, { x: 1, y: 1, z: 1 }, '<')
                    .to(group.rotation, { x: 0, y: 0, ease: 'elastic' }, '<')
                    .to({}, { duration: 2.5 });
            }, () => next(gen));
        }

        function start() {
            next(Gen());
        }

        function* Gen() {
            while (1) yield `https://source.unsplash.com/collection/11323911/?${Date.now()}`;
        }

        start();
        // === THREE.JS EXAMPLE CODE END ===
    }
    render() {
        return (
            <div className="canvas-div" ref={ref => (this.mount = ref)}>
            </div>

        )
    }
}

export default Blob