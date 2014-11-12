varying vec3 vNormal;
varying vec3 vPos;

varying vec3 vEye;

uniform float outline;

void main(){

  vPos = position;
  vNormal = normalize( normalMatrix * normal );


  vEye = vec3( 100. ) - (modelMatrix * vec4( vPos , 1. ) ).xyz;

  vPos += normal * outline * .01; 

  gl_Position = projectionMatrix * modelViewMatrix * vec4( vPos   , 1. );

}
