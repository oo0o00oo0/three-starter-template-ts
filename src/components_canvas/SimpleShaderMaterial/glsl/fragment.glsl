precision mediump float;

uniform float uTime;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {

  gl_FragColor = vec4(0.2, vUv.x, vUv.y, 1.0);
}