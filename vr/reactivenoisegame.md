---
layout: vrexperiment
title: VR Experiment No.3
---
<script src="//cdn.rawgit.com/donmccurdy/aframe-extras/v3.3.4/dist/aframe-extras.min.js"></script>
<script src="/scripts/vr_scripts/look-at.js"></script>
<script src="https://rawgit.com/ngokevin/aframe-animation-component/master/dist/aframe-animation-component.min.js"></script>
<script>
/**
 * Rain of Entities component.
 *
 * Creates a spawner on the scene, which periodically generates new entities
 * and drops them from the sky. Objects falling below altitude=0 will be
 * recycled after a few seconds.
 *
 * Requires: physics     , 'animation__color|property: material.color; dir: alternate;dur: 400; loop: true; from: #555 to: #333'

 */
AFRAME.registerComponent('rain-of-entities', {
  schema: {
    tagName:    { default: 'a-entity' },
    components: { default: ['dynamic-body|shape:sphere;sphereRadius:.5;mass:100;', 'force-pushable', 'material|shader:flat;color:'+'red'+';', 'obj-model|obj:#tree-obj3'] },
    maxCount:   { default: 10, min: 0 },
    interval:   { default: 1000, min: 0 },
    lifetime:   { default: 10000, min: 0 }
  },
  init: function () {
    this.boxes = [];
    this.timeout = setInterval(this.spawn.bind(this), this.data.interval);
  },
  spawn: function () {
    if (this.boxes.length >= this.data.maxCount) {
      clearTimeout(this.timeout);
      return;
    }
    var data = this.data,
        box = document.createElement(data.tagName);
    this.boxes.push(box);
    this.el.appendChild(box);
    box.setAttribute('position', this.randomPosition());
  //  box.setAttribute('material', 'color:red;shader:flat;');
    data.components.forEach(function (s) {
      var parts = s.split('|');
      box.setAttribute(parts[0], parts[1] || '');
    });
    // Recycling is important, kids.
    setInterval(function () {
      if (box.body.position.y > 0) return;
      box.body.position.copy(this.randomPosition());
      box.body.velocity.set(0,0,0);
    }.bind(this), this.data.lifetime);
  },
  randomPosition: function () {
    return {x: Math.random() * 10 - 5, y: 10, z: Math.random() * 10 - 5};
  }
  /*randomColor: function () {
    return {'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)}
  }*/
});
/**
 * Force Pushable component.
 *
 * Applies behavior to the current entity such that cursor clicks will apply a
 * strong impulse, pushing the entity away from the viewer.
 *
 * Requires: physics
 */
AFRAME.registerComponent('force-pushable', {
  schema: {
    force: { default: 100 }
  },
  init: function () {
    this.pStart = new THREE.Vector3();
    this.sourceEl = this.el.sceneEl.querySelector('[camera]');
    this.el.addEventListener('click', this.forcePush.bind(this));
  },
  forcePush: function () {
    var force,
        el = this.el,
        pStart = this.pStart.copy(this.sourceEl.getAttribute('position'));
    // Compute direction of force, normalize, then scale.
    force = el.body.position.vsub(pStart);
    force.normalize();
    force.scale(this.data.force, force);
    el.body.applyImpulse(force, el.body.position);
  }
});
/**
 * Force Float component.
 *
 * Applies behavior to the scene in which a keypress (default: Spacebar) will
 * temporarily disable gravity and apply a small upward impulse to target
 * entities.
 *
 * Requires: physics
 */
AFRAME.registerComponent('force-float', {
  schema: {
    force:    { default: 1.0 },
    keyCode:  { default: 32 },
    selector: { default: '[force-float-target]' }
  },
  init: function () {
    this.isFloating = false;
    document.addEventListener('keyup', this.onKeyup.bind(this));
  },
  onKeyup: function (e) {
    if (e.keyCode !== this.data.keyCode) return;
    var data = this.data,
        isFloating = this.isFloating,
        physics = this.el.sceneEl.systems.physics,
        targets = this.el.sceneEl.querySelectorAll(data.selector);
    if (isFloating) {
      physics.world.gravity = this.gravity;
    } else {
      // Disable gravity.
      this.gravity = physics.world.gravity;
      physics.world.gravity = new CANNON.Vec3(0, 0, 0);
      // Lift targets slightly.
      targets = [].slice.call(targets).forEach(function (el) {
        var position = new CANNON.Vec3().copy(el.getAttribute('position')),
            impulse = new CANNON.Vec3(
              0.25 * data.force * Math.random(),
              1.00 * data.force * Math.random() + 1.5,
              0.25 * data.force * Math.random()
            );
        el.body.applyImpulse(impulse, position);
      });
    }
    this.isFloating = !isFloating;
  }
});
    </script>

<a-scene rain-of-entities force-float="selector: [force-pushable]" physics="debug: true">
  <a-assets>
    <a-asset-item id="tree-obj" src="/vr_assets/firstlogo.OBJ"></a-asset-item>
    <a-asset-item id="tree-obj2" src="/vr_assets/firstlogo.OBJ"></a-asset-item>
    <a-asset-item id="tree-obj3" src="/vr_assets/firstlogo.OBJ"></a-asset-item>
  <!--  <video id="video" src="/vr_assets/HowToLoose.mp4" autoplay loop></video>-->
  </a-assets>

    <a-entity id="target" camera universal-controls kinematic-body position="0 0 0">
      <a-entity cursor raycaster="far: 75"
          position="0 0 -1"
          geometry="primitive: circle; radius: 0.01; segments: 4;"
          material="color: #FF4444; shader: flat"></a-entity>
    </a-entity>
    <!-- one -->
    <a-entity position="-.01 0 5" obj-model="obj: #tree-obj" look-at="#target" material="color: white; shader: flat;">
      <a-animation attribute="position" to="0 0 5" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
    </a-entity>

    <a-entity position=".01 0 5" obj-model="obj: #tree-obj" look-at="#target" material="color: black; shader: flat;">
      <a-animation attribute="position" to="0 0 5" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
    </a-entity>

    <!-- two -->
    <a-entity position="-.01 0 -5" obj-model="obj: #tree-obj" look-at="#target" material="color: white; shader: flat;">
      <a-animation attribute="position" to="0 0 -5" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
    </a-entity>

    <a-entity position=".01 0 -5" obj-model="obj: #tree-obj" look-at="#target" material="color: black; shader: flat;">
      <a-animation attribute="position" to="0 0 -5" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
    </a-entity>

    <!-- three -->
    <a-entity position="-5.01 0 0" obj-model="obj: #tree-obj" look-at="#target" material="color: white; shader: flat;">
      <a-animation attribute="position" to="-5 0 0" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
    </a-entity>

    <a-entity position="-4.99 0 0" obj-model="obj: #tree-obj" look-at="#target" material="color: black; shader: flat;">
      <a-animation attribute="position" to="-5 0 0" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
    </a-entity>

    <!-- four -->
    <a-entity position="5.01 0 0" obj-model="obj: #tree-obj" look-at="#target" material="color: white; shader: flat;">
      <a-animation attribute="position" to="5 0 0" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
    </a-entity>

    <a-entity position="4.99 0 0" obj-model="obj: #tree-obj" look-at="#target" material="color: black; shader: flat;">
      <a-animation attribute="position" to="5 0 0" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
    </a-entity>

    <a-entity id="nyan"  dynamic-body="shape: sphere; sphereRadius: .5; mass: 100;" position="0 2 -2" obj-model="obj: #tree-obj3" material="color: blue; shader: flat;"></a-entity>
    <a-entity id="nyan2" dynamic-body="shape: sphere; sphereRadius: .5; mass: 100;" position="0 3 -2" obj-model="obj: #tree-obj3" material="color: red; shader: flat;"></a-entity>
    <a-entity id="nyan3" dynamic-body="shape: sphere; sphereRadius: .5; mass: 100;" position="0 4 -2" obj-model="obj: #tree-obj3" material="color: green; shader: flat;"></a-entity>
    <a-entity id="nyan4" dynamic-body="shape: sphere; sphereRadius: .5; mass: 100;" position="0 5 -2" obj-model="obj: #tree-obj3" material="color: orange; shader: flat;"></a-entity>

  <a-light type="ambient" color="#444" intensity="0.1"></a-light>
  <a-cylinder position="0 -2 0" height="0.2" static-body radius="10" material="shader:flat; color:black"></a-cylinder>
  <!--<a-videosphere src="#video" rotation="0 0 0" radius="20"></a-videosphere>-->

  <a-sky color="white"></a-sky>
  <script>
    function playVid() {
      var vid = document.getElementById("video");
      var button = document.getElementById("playvideo");
        vid.play();
        button.className="hidebutton";
    }
      function pauseVid() {
        var vid = document.getElementById("video");
        vid.pause();
    }
  </script>
</a-scene>
