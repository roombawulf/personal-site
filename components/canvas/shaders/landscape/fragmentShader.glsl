varying vec3 v_pos;
varying vec3 v_normal;

void main() {

    vec3 orange = vec3(1.0, 0.46, 0.10);
    vec3 red = vec3(1.0, 0.0, 0.0);
    vec3 color = mix(orange, red , floor(v_pos.z*8.0)/8.0);
    
    gl_FragColor = vec4(v_normal, 1.0);
}
