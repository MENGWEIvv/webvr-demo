<template>
  <a-scene>
      <!--资源管理器-->
      <a-assets>
        <img
          id="boxTexture"
          src="https://piccdn.luojilab.com/fe-oss/default/MTU0NDYwMzIzNjA0.png"
        >
        <img
          id="groundTexture"
          src="https://piccdn.luojilab.com/fe-oss/default/MTUzMjYwNTkwNTkz.png"
        >
        <img
          id="skyTexture"
          src="https://piccdn.luojilab.com//fe-oss/igetcms/1544680944911/%E5%AE%98%E7%BD%912018%E6%97%B6%E9%97%B4%E7%9A%84%E6%9C%8B%E5%8F%8B.jpg"
        >
      </a-assets>
      <!--盒子模型-->
      <a-box
        position="0 2 -5"
        rotation="0 45 45"
        scale="2 2 2"
        src="#boxTexture"
      >
          <a-animation attribute="position" direction="alternate" dur="2000" repeat="indefinite" to="0 2.2 -5"></a-animation>
          <a-animation attribute="rotation" begin="click" dur="2000" to="360 405 45"></a-animation>
          <a-animation attribute="scale" begin="mouseenter" dur="300" to="2.3 2.3 2.3"></a-animation>
          <a-animation attribute="scale" begin="mouseleave" dur="300" to="2 2 2"></a-animation>
      </a-box>
      <a-sky
        height="1000"
        radius="30"
        src="#skyTexture"
        theta-length="90"
        width="1000"
      >
      </a-sky>
      <a-light
        type="point"
        intensity="2"
        position="2 4 4"
      >
      </a-light>
      <a-plane
        src="#groundTexture"
        rotation="-90 0 0"
        height="100"
        width="100"
        repeat="10 40"
      >
      </a-plane>
      <!--不支持中文-->
      <a-text
        value="Time Friend"
        color="#ff6b00"
        position="-0.9 0.2 -3"
        scale="2 2 2"
      >
      </a-text>
      <a-camera>
          <a-cursor color="#FAFAFA" />
      </a-camera>
  </a-scene>
</template>

<script>
import 'aframe';
export default {
  name: 'A-Frame',
};
</script>
