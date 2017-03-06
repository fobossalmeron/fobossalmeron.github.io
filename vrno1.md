---
layout: vrexperiment
title: VR Experiment No.1
---

<a-scene>
  <a-assets>
    <a-asset-item id="tree-obj" src="/assets/firstlogo.OBJ"></a-asset-item>
    <a-asset-item id="tree-obj2" src="/assets/firstlogo.OBJ"></a-asset-item>
    <video id="video" src="/assets/HowToLoose.mp4" autoplay loop></video>
  </a-assets>

    <a-entity camera look-controls wasd-controls position="0 0 8">
       <a-entity cursor id="target"
                 geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.016"
                 material="color: yellow; shader: flat;"
                 position="0 0 -1"></a-entity>
    </a-entity>

    <a-entity position="-.01 0 0" obj-model="obj: #tree-obj" look-at="#target" material="color: white; shader: flat;">
      <a-animation attribute="position" to="0 0 0" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
    <!--  <a-animation attribute="material.color" begin="mouseenter" dur="1" to="yellow"></a-animation>
      <a-animation attribute="material.color" begin="mouseleave" dur="1" to="white"></a-animation>-->
    </a-entity>

    <a-entity position=".01 0 0" obj-model="obj: #tree-obj2" look-at="#target" material="color: black; shader: flat;">
      <a-animation attribute="position" to="0 0 0" direction="alternate" dur="4000" repeat="indefinite"></a-animation>
    <!--  <a-animation attribute="material.color" begin="mouseenter" dur="1" to="blue"></a-animation>
      <a-animation attribute="material.color" begin="mouseleave" dur="1" to="white"></a-animation>-->
    </a-entity>

  <a-light type="ambient" color="#444" intensity="0.1"></a-light>

  <a-videosphere src="#video" rotation="0 0 0" radius="20"></a-videosphere>

  <a-sky color="white"></a-sky>

</a-scene>
