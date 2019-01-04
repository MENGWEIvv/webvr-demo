<template>
  <div class="home">
    <canvas id="canvas" width="600" height="600"></canvas>
  </div>
</template>

<script>
export default {
  name: 'WebGL',
  mounted() {
    let canvas = document.getElementById('canvas');
    let gl = canvas.getContext('experimental-webgl');
    // 顶点着色器源码 openGL shader language(p8)
    let VSHADER_SOURCE = `
        attribute vec4 a_Position;
        void main() {
            gl_Position = a_Position;
        }
    `;
    // 片元着色器源码
    let FSHADER_SOURCE = `
        precision mediump float;
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 0.6);
        }
    `;
    // 顶点着色器
    let vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, VSHADER_SOURCE);
    gl.compileShader(vertexShader);
    // 片元着色器
    let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, FSHADER_SOURCE);
    gl.compileShader(fragmentShader);
    // 创建一个着色器程序
    let program = gl.createProgram();
    // 把前面创建的二个着色器对象添加到着色器程序中
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);
    // 设置顶点数据
    let vertices = new Float32Array([
      -0.3,  0.3,  0.0,
       0.3,  0.3,  0.0,
      -0.3, -0.3,  0.0,
       0.3, -0.3,  0.0,
    ]);
    // 往顶点数据缓存中写入数据
    let buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    // 使着色器代码中的a_Position变量，绑定顶点数据缓冲区
    let a_Position = gl.getAttribLocation(program, 'a_Position');
    gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0); // 将缓冲区对象分配给着色器变量（p8）
    gl.enableVertexAttribArray(a_Position);
    gl.clearColor(0.5, 0.6, 0.7, 0.6);
    gl.clear(gl.COLOR_BUFFER_BIT);
    // 绘制（p9）
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
};
</script>
