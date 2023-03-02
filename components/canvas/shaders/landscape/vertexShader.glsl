uniform sampler2D u_terrainTexture;
uniform float u_time;

varying vec3 v_pos;
varying vec3 v_normal;

vec3 orthoganal(vec3 v){
  return normalize(
    abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y)
  );
}

float displace(vec2 vuv){
  return texture2D(u_terrainTexture, vuv).z;
}

void main() {

  float texel = 1.0/2048.0;

  vec3 displacedPos = position + normal * displace(uv);

  vec3 tangent = orthoganal(normal);
  vec3 bitangent = normalize(cross(tangent,normal));

  vec3 neighbour1 = position + tangent * 0.001;
  vec3 neighbour2 = position + bitangent * 0.001;

  vec2 neighbour1uv = uv + vec2(-texel, 0.0);
  vec2 neighbour2uv = uv + vec2(0.0, -texel);

  vec3 displacedN1 = neighbour1 + normal * displace(neighbour1uv);
  vec3 displacedN2 = neighbour2 + normal  * displace(neighbour2uv);

  vec3 displacedTangent = displacedN1 - displacedPos;
  vec3 displacedBitangent = displacedN2 - displacedPos;
  vec3 displacedNormal = normalize(cross(displacedTangent, displacedBitangent));

  v_normal = displacedNormal;
  v_pos = displacedPos;

  vec4 modelPosition = modelMatrix * vec4(displacedPos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

}
