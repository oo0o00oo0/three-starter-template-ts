precision mediump float;

uniform float uTime;
uniform vec2 uPointer;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  vec2 uv = vUv * 2.0 - 1.0;

  float d = length(uv);

  float speed = uPointer.y * 10.;

  d -= uPointer.x;

  vec3 colour = vec3(d, sin(vUv * 10.0 + uTime * 10.).x, vUv.y);

  gl_FragColor = vec4(colour, 1.0);

}