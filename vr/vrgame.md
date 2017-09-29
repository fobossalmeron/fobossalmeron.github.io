---
layout: vrexperiment
title: VR Game Experiment
---
<script src="/scripts/vr_scripts/restrict-position.js"></script>
<script src="https://rawgit.com/mayognaise/aframe-video-shader/master/dist/aframe-vid-shader.min.js"></script>
<script src="https://rawgit.com/ngokevin/aframe-animation-component/master/dist/aframe-animation-component.min.js"></script>
<script src="//cdn.rawgit.com/donmccurdy/aframe-extras/v3.3.4/dist/aframe-extras.min.js"></script>
<script src="https://cdn.rawgit.com/zcanter/aframe-gradient-sky/master/dist/gradientsky.min.js"></script>
<script src="https://rawgit.com/casonclagg/aframe-mario-star-component/master/dist/aframe-mario-star-component.min.js"></script>




<a-scene physics="debug: false">
  <a-assets>
    <a-asset-item id="head1" src="/vr_assets/tiburcio.OBJ"></a-asset-item>
    <a-asset-item id="tree-obj2" src="/vr_assets/firstlogo.OBJ"></a-asset-item>
    <video id="video2" src="/vr_assets/videotext.mp4" autoplay loop></video>
  </a-assets>

    <a-entity camera universal-controls kinematic-body jump-ability position="0 3 0">
      <a-box material="shader:video;src:url(/vr_assets/videotext.mp4); side:double;" position="0 0 -2" dynamic-body height="1" depth="1"></a-box>
    </a-entity>
<!--
    <a-entity position="3 3 -5" obj-model="obj: #tree-obj" material="color: white;">
      <a-animation attribute="position" to="0 3 -5" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
      <a-animation attribute="material.color" begin="mouseenter" dur="1" to="blue"></a-animation>
      <a-animation attribute="material.color" begin="mouseleave" dur="1" to="white"></a-animation>
    </a-entity>

    <a-entity position="0 2 -5" obj-model="obj: #tree-obj2" material="color: blue;">
      <a-animation attribute="position" to="0 3 -5" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
      <a-animation attribute="material.color" begin="mouseenter" dur="200" from="blue" to="red"></a-animation>
      <a-animation attribute="material.color" begin="mouseleave" dur="200" from="red" to="blue"></a-animation>
      <a-animation attribute="rotation" begin="click" dur="1000" from="0 0 0" delay="100" to="0 360 0"></a-animation>
    </a-entity>-->

  <a-light type="ambient" color="#444" intensity="0.1"></a-light>
  <a-light type="point" color="white" position="0 7 0" intensity="0.4">
    <a-animation attribute="position" to="0 2 0" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
  </a-light>

  <a-entity id="whatgot" dynamic-body="shape: box; mass: 2" position="10 10 -4" scale="0.1 0.1 0.1" obj-model="obj: #head1" mario-star="waitTicks: 4"></a-entity>

  <a-box id="other-box" dynamic-body position="2 3 -2" linearDamping="0.00004" angularDamping="0.00004" width="1" height="10" depth="1"></a-box>
  <a-box constraint="target: #target;" material="shader:video;src:url(/vr_assets/videotext.mp4); side:double;" position="2 0.5 1" dynamic-body height="1" depth="1"></a-box>

  <a-gradient-sky material="shader: gradient; topColor: 255 0 0; bottomColor: 0 121 255;"></a-gradient-sky>
  <a-ocean position="0 -1 0" rotation="180 0 0" color="0 121 255" width="100" depth="100" density="40" speed="1"></a-ocean>
  <a-cylinder rotation="0 0 0" height="0.2" static-body radius="10" material="shader:flat; color:black;"></a-cylinder>
  <script>

    function playVid() {
      var vid = document.getElementById("video");
      var vid2 = document.getElementById("video");
      var button = document.getElementById("playvideo");
        vid.play();
        vid2.play();
        button.className="hidebutton";
    }
      function pauseVid() {
        var vid = document.getElementById("video");
        var vid2 = document.getElementById("video");
        vid.pause();
        vid2.pause();
    }
  </script>
</a-scene>
