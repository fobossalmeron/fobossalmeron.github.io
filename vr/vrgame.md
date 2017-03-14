---
layout: vrexperiment
title: VR Game Experiment
---
<script src="/scripts/vr_scripts/restrict-position.js"></script>
<script src="https://rawgit.com/mayognaise/aframe-video-shader/master/dist/aframe-vid-shader.min.js"></script>

<a-scene debug>
  <a-assets>
    <a-asset-item id="tree-obj" src="/vr_assets/firstlogo.OBJ"></a-asset-item>
    <a-asset-item id="tree-obj2" src="/vr_assets/firstlogo.OBJ"></a-asset-item>
    <video id="video2" src="/vr_assets/videotext.mp4" autoplay loop></video>
    <video id="video" src="/vr_assets/HowToLoose.mp4" autoplay loop></video>
  </a-assets>

    <a-entity camera wasd-controls look-controls restrict-position position="0 1.6 0">
       <a-entity cursor id="target"
                 geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.016"
                 material="color: yellow; shader: flat;"
                 position="0 0 -1"></a-entity>
    </a-entity>
<!--
    <a-entity position="3 3 -5" obj-model="obj: #tree-obj" material="color: white;">
      <a-animation attribute="position" to="0 3 -5" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
      <a-animation attribute="material.color" begin="mouseenter" dur="1" to="blue"></a-animation>
      <a-animation attribute="material.color" begin="mouseleave" dur="1" to="white"></a-animation>
    </a-entity>-->

    <a-entity position="0 2 -5" obj-model="obj: #tree-obj2" material="color: blue;">
      <a-animation attribute="position" to="0 3 -5" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
      <a-animation attribute="material.color" begin="mouseenter" dur="500" from="blue" to="red"></a-animation>
      <a-animation attribute="material.color" begin="mouseleave" dur="500" from="red" to="blue"></a-animation>
      <a-animation attribute="rotation" begin="click" dur="1000" from="0 0 0" delay="100" to="0 360 0"></a-animation>
    </a-entity>

  <a-light type="ambient" color="#444" intensity="0.1"></a-light>
  <a-light type="point" color="white" position="0 7 0" intensity="0.3">
    <a-animation attribute="position" to="0 2 0" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
  </a-light>

  <a-entity position="0 0 0" geometry="primitive: circle; radius: 3" material="shader:video;src:url(/vr_assets/videotext.mp4); side:double;" rotation="-90 0 0"></a-entity>
  <a-sky color="black"></a-sky>
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
