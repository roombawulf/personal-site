// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

uniform float time;
varying vec3 v_pos;

float hash(vec2 p) {vec3 p3 = fract(vec3(p.xyx) * 0.13); p3 += dot(p3, p3.yzx + 3.333); return fract((p3.x + p3.y) * p3.z); }
float hash(float p) { p = fract(p * 0.011); p *= p + 7.5; p *= p + p; return fract(p); }

float random (vec3 v) {
    return fract(sin(dot(v.xyz,
                         vec3(12.9898,78.233,11.8293)))*
        43758.5453123);
}

float noise(vec3 x) {
    const vec3 step = vec3(110, 241, 171);

    vec3 i = floor(x);
    vec3 f = fract(x);
 
    // For performance, compute the base input to a 1D hash from the integer part of the argument and the 
    // incremental change to the 1D based on the 3D -> 1D wrapping
    float n = dot(i, step);

    vec3 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix( hash(n + dot(step, vec3(0, 0, 0))), hash(n + dot(step, vec3(1, 0, 0))), u.x),
                   mix( hash(n + dot(step, vec3(0, 1, 0))), hash(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
               mix(mix( hash(n + dot(step, vec3(0, 0, 1))), hash(n + dot(step, vec3(1, 0, 1))), u.x),
                   mix( hash(n + dot(step, vec3(0, 1, 1))), hash(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);
}

const mat3 mtx = mat3( 
    0.80,  0.60, 0.0, 
    -0.60,  0.80, 0.0,
    0.0, 0.60, -0.80
    );
float fbm( vec3 p ){
    float f = 0.0;
    f += 0.500000*noise( p + time * 0.25); p = mtx*p*2.02;
    // f += 0.031250*noise( p ); p = mtx*p*2.01;
    // f += 0.250000*noise( p ); p = mtx*p*2.03;
    //f += 0.125000*noise( p ); p = mtx*p*2.01;
    //f += 0.062500*noise( p ); p = mtx*p*2.04;
    //f += 0.015625*noise( p );

    return f/0.86875;
}

float pattern(in vec3 n, out vec3 p, out vec3 r){

    p.x = (fbm(n));
    p.y = (fbm(n + vec3(3.2,2.6,7.3)));
    p.z = (fbm(n + vec3(5.1,2.6,1.9)));
    
    r.x = (fbm(n + (2.0 * p)));
    r.y = (fbm(n + (2.0 * p) + vec3(1.2,6.2,3.7)));
    r.z = (fbm(n + (2.0 * p) + vec3(-9.1,6.2,2.9)));

    return fbm(n + (6.0 * r));
}


void main() {

    vec3 pos = (v_pos * 1.0);
    vec3 p;
    vec3 r;
    float f = pattern(pos, p, r);

    vec3 col = vec3(0.2, 0.1, 0.4);
    col = mix( col, vec3(0.3,0.05,0.05), f);
    col = mix( col, vec3(0.9,0.9,0.9), dot(r,r) );
    col = mix( col, vec3(0.5,0.2,0.2), 0.5*p.y*p.y );


    gl_FragColor = vec4(col, 1.0);

}