// DistortMaterial 
uniform float time;
uniform vec3 color;

varying vec3 v_normal;
varying vec3 v_pos;

void main(){

    gl_FragColor = vec4(v_normal, 1.0);

}