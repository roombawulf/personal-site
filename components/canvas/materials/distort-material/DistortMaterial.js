import * as THREE from 'three'
import { shaderMaterial } from "@react-three/drei";

import vertexShader from './shaders/vertexShader.glsl'
import fragmentShader from './shaders/fragmentShader.glsl'

const DistortMaterial = shaderMaterial(
    { time: 0.0, color: new THREE.Color('orange')},
    vertexShader,
    fragmentShader
)
export default DistortMaterial
