// DistortMaterial 
uniform float time;
uniform vec3 color;

varying vec3 v_normal;

void main(){

    vec3 f_color = vec3(0.0);

    f_color += mix(v_normal, color, 0.8);

    gl_FragColor = vec4(f_color, 1.0);
}