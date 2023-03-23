uniform vec2 u_res;
uniform sampler2D u_texture;

varying vec2 v_uv;
varying vec3 v_worldPos;
varying vec3 v_viewPos;
varying vec3 v_normal;

#define PI 3.1456

struct Geometry {
	vec3 pos;
	vec3 posWorld;
	vec3 viewDir;
	vec3 viewDirWorld;
	vec3 normal;
	vec3 normalWorld;
};

vec4 fromLinear(vec4 linearRGB) {
    bvec3 cutoff = lessThan(linearRGB.rgb, vec3(0.0031308));
    vec3 higher = vec3(1.055)*pow(linearRGB.rgb, vec3(1.0/2.4)) - vec3(0.055);
    vec3 lower = linearRGB.rgb * vec3(12.92);

    return vec4(mix(higher, lower, cutoff), linearRGB.a);
}

float random(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

float ggx( float dNH, float roughness ) {
	float a2 = roughness * roughness;
	a2 = a2 * a2;
	float dNH2 = dNH * dNH;

	if( dNH2 <= 0.0 ) return 0.0;

	return a2 / ( PI * pow( dNH2 * ( a2 - 1.0 ) + 1.0, 2.0) );
}

void main() {

	vec3 outColor = vec3(0.0);

    // Geometry 
    float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

    Geometry geo;
	geo.pos = -v_viewPos;
	geo.posWorld = v_worldPos;
	geo.viewDir = normalize( v_viewPos );
	geo.viewDirWorld = normalize( geo.posWorld - cameraPosition );
	geo.normal = normalize( v_normal ) * faceDirection;
    
    geo.normalWorld = normalize( ( vec4( geo.normal, 0.0 ) * viewMatrix ).xyz );

    // Refract
    vec3 refractCol = vec3( 0.0 );
	vec2 screenUv = gl_FragCoord.xy / u_res.xy;
	vec2 refractUv = screenUv;
	float slide;
	vec2 refractUvR;
	vec2 refractUvG;
	vec2 refractUvB;
	float refractPower = 0.05;
	vec2 refractNormal =  geo.normal.xy * ( 1.0 - geo.normal.z * 0.7 );

    #pragma unroll_loop_start
	for ( int i = 0; i < 16; i ++ ) {
		
		slide = float( UNROLLED_LOOP_INDEX ) / 16.0 * 0.03 + random( screenUv ) * 0.007;

		refractUvR = refractUv - refractNormal * ( refractPower + slide * 1.0 );
		refractUvG = refractUv - refractNormal * ( refractPower + slide * 2.0 );
		refractUvB = refractUv - refractNormal * ( refractPower + slide * 3.0 );

		refractCol.x += fromLinear(texture2D( u_texture, refractUvR )).x;
		refractCol.y += fromLinear(texture2D( u_texture, refractUvG )).y;
		refractCol.z += fromLinear(texture2D( u_texture, refractUvB )).z;

	}
	#pragma unroll_loop_end
	refractCol /= float( 16 );
	outColor += refractCol;

	vec3 lightDir = normalize( vec3( 1.0, 1.0, 1.0 ) );
	vec3 halfVec = normalize( geo.viewDir + lightDir );

	float dLH = clamp( dot( lightDir, halfVec ), 0.0, 1.0 );
	float dNH = clamp( dot( geo.normal, halfVec ), 0.0, 1.0 );

	outColor += ggx( dNH, 0.0  );

    gl_FragColor = vec4(outColor, 1.0);
}