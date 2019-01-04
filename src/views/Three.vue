<template>
</template>

<script>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial
} from 'three';
export default {
  name: 'Three',
  mounted() {
    // 创建场景
    let scene = new Scene();
    // 远景相机（参数：1.视角 2.面比 3.近剪裁面 4.远剪裁面）p(11)
    let camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // 创建渲染器
    let renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 1);
    document.body.appendChild(renderer.domElement);
    let geometry = new BoxGeometry(2, 2, 2);
    let material = new MeshBasicMaterial({ color: 0x00ff00 });
    let cube = new Mesh(geometry, material); 
    scene.add(cube);
    camera.position.z = 5;
    let render = function() {
      requestAnimationFrame(render);
      cube.rotation.x += 0.05;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    render();
  }
};
</script>
