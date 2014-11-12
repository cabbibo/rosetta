
uniform vec3 color1;
uniform vec3 color2; 
uniform vec3 color3; 
uniform float outline;
varying vec3 vNormal;
varying vec3 vPos;
varying vec3 vEye;

void main(){


  vec3 nEye = normalize( vEye );
  float dEye = length( vEye );

  float m = ( 1. + dot( nEye , vNormal ) )/ 2.;

  float mI = 1. - m;

  vec3 c = m * color1  + mI * color2;


  vec4 nCol = (1. - outline) * vec4( (vNormal * .5 + .5) , .5 );
  vec4 oCol = outline * vec4( 1. );

  vec3 ol = outline * color3;
  gl_FragColor = vec4( c * (1. - outline ) + ol , 1.);

}

