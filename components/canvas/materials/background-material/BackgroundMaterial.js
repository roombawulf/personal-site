import * as THREE from 'three'
import { shaderMaterial } from "@react-three/drei";

import vertexShader from './shaders/vertexShader.glsl'
import fragmentShader from './shaders/fragmentShader.glsl'


const BackgroundMaterial = shaderMaterial(
    { time: 0.0 },
    vertexShader,
    fragmentShader,
)
export default BackgroundMaterial