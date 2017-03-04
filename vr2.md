---
layout: page
title: VR2 A Frame CURRENT
---
<script src="https://unpkg.com/aframe-mountain-component@0.3.3/dist/aframe-mountain-component.min.js"></script>

<a-scene>
  <a-assets>
    <a-asset-item id="tree-obj" src="/assets/firstlogo.obj"></a-asset-item>
    <a-asset-item id="tree-mtl" src="/assets/firstlogo.mtl"></a-asset-item>
    <img id="ground" src="/assets/ground.jpg">
    <img id="three" src="/assets/360.jpg">
    <img id="sky" src="/assets/skyfin.jpg">
    <video id="video" src="/assets/bg.mp4" autoplay loop crossorigin></video>
  </a-assets>

    <a-entity camera look-controls wasd-controls>
       <a-entity cursor id="target"
                 geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.016"
                 material="color: yellow; shader: flat;"
                 position="0 0 -1"></a-entity>
    </a-entity>

  <a-entity position="0 1.2 -4" obj-model="obj: #tree-obj" look-at="#target" material="color: #fff; shader: flat;">
    <a-animation attribute="position" to="0 1.5 -4" direction="alternate" dur="2000"
    repeat="indefinite"></a-animation>
    <a-animation attribute="material.color" begin="mouseenter" dur="1" to="yellow"></a-animation>
    <a-animation attribute="material.color" begin="mouseleave" dur="1" to="white"></a-animation>
  </a-entity>

  <a-light type="ambient" color="#444" intensity="0.1"></a-light>
  <a-light type="point" intensity="0.3" position="0 1.2 -4">
    <a-animation attribute="position" to="0 1.5 -4" direction="alternate" dur="2000"
    repeat="indefinite"></a-animation>
    <a-animation attribute="material.color" begin="mouseenter" dur="1" to="yellow"></a-animation>
    <a-animation attribute="material.color" begin="mouseleave" dur="1" to="white"></a-animation>
  </a-light>

  <a-mountain id="mountain" color="white" shadowColor="black"></a-mountain>

  <a-plane material="metalness: 0.7" rotation="-90 0 0" color="#272727" height="1025" width="1025" position="0 -0.1 0"></a-plane>

  <a-videosphere src="#video" rotation="-90 0 0"></a-videosphere>

<!--  <a-sky color="black"></a-sky>-->

</a-scene>
