
        if (!Detector.webgl) {
            Detector.addGetWebGLMessage();
        }

        var container;

        var camera, controls, scene, renderer;
        var lighting, ambient, keyLight, fillLight, backLight;

        var postprocessing = { enabled  : true };

        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;

        init();
        animate();



        function init() {

            container = document.createElement('section');
            home = document.getElementById('home')
            home.appendChild(container);
            //document.body.appendChild(container2);

            /* Camera */

            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 100000);
            camera.position.z = 10;
      //      camera.lookAt(scene.position);

            /* Scene */

            scene = new THREE.Scene();
      //      scene.fog = new THREE.Fog(0xffffff, 4, 30 );
            lighting = false;

            ambient = new THREE.AmbientLight(0xffffff, 4);
            scene.add(ambient);

            //Amarilla
            keyLight = new THREE.DirectionalLight(new THREE.Color('#FFDD3B'), 1.0);
            keyLight.position.set(-600, 100, 100).normalize();
            helper1 = new THREE.DirectionalLightHelper(keyLight, 50);
      //      scene.add( helper1);

            //Azul
            fillLight = new THREE.DirectionalLight(new THREE.Color('#2790EF'), 1.0);
            fillLight.position.set(100, 470, -100).normalize();
            helper4 = new THREE.DirectionalLightHelper(fillLight, 50);
        //    scene.add( helper4);

            //Rosa
            keyLight2 = new THREE.DirectionalLight(new THREE.Color('#FC1AA1'), 1.0);
            keyLight2.position.set(800, -150, 100).normalize();
            helper2 = new THREE.DirectionalLightHelper(keyLight2, 50);
      //      scene.add( helper2);

            //Blanca
            keyLight3 = new THREE.DirectionalLight(new THREE.Color('#FFFFFF'), 1.0);
            keyLight3.position.set(900, 0, 0).normalize();
            helper3 = new THREE.DirectionalLightHelper(keyLight3, 50);
        //    scene.add( helper3);


            ambient.intensity = 0.6;
            scene.add(keyLight);
            scene.add(keyLight2);
            scene.add(keyLight3);
            scene.add(fillLight);
            scene.add(backLight);

            /* Model */

            var mtlLoader = new THREE.MTLLoader();
            mtlLoader.setBaseUrl('assets/');
            mtlLoader.setPath('/assets/');
            mtlLoader.load('firstlogo.mtl', function (materials) {

                materials.preload();

            //    materials.materials.default.map.magFilter = THREE.NearestFilter;
            //    materials.materials.default.map.minFilter = THREE.LinearFilter;

                var objLoader = new THREE.OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.setPath('/assets/');
                objLoader.load('firstlogo.obj', function (object) {

                    scene.add(object);

                });

            });

            /* Renderer */

            renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0xffffff, 0);

            container.appendChild(renderer.domElement);

            /* Controls */

            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 1.5;
            controls.enableZoom = true;

            /* Events */

            window.addEventListener('resize', onWindowResize, false);
            document.addEventListener( 'mousemove', onDocumentMouseMove, false );

        }

        function onWindowResize() {

            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);

        }
        function onDocumentMouseMove(event) {
            mouseX = ( event.clientX - windowHalfX );
            mouseY = ( event.clientY - windowHalfY ) * 0.3;
          }


        function animate() {

            requestAnimationFrame(animate);

            controls.update();

            render();


        }

        function render() {
          helper1.update();
          helper2.update();
          helper3.update();
          helper4.update();
      //    var timer = -0.00007 * Date.now();
  		//	camera.position.y += ( - mouseY - camera.position.y ) * .005;
  		//  camera.position.x = 100 * Math.cos( timer );
  		//		camera.position.z = 18 * Math.sin( timer );
  		//		camera.lookAt( scene.position );

            renderer.render(scene, camera);

        }
