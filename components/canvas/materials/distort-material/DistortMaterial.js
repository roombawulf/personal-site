import * as THREE from 'three'
import vertexShader from './shaders/vertexShader.glsl'
import fragmentShader from './shaders/fragmentShader.glsl'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'


function DistortMaterial() {

    const time = useRef({value: 0.0})
    useFrame(({ clock }) => time.current.value = clock.elapsedTime)

    const attachCustomShader = (shader) => {

        const vertexHeader = vertexShader.split('\n').slice(0, 101).join('\n')
        const vertexMain = vertexShader.split('\n').slice(101, -3).join('\n')
    
        shader.uniforms.time = time.current
    
        shader.vertexShader = `${vertexHeader}${shader.vertexShader}`
        shader.vertexShader = shader.vertexShader.replace(
            `void main() {`,
            `${vertexMain}`
        )
    
        shader.vertexShader = shader.vertexShader.replace(
            `#include <displacementmap_vertex>`,
            `transformed = displacedPos;`
        )
    
        shader.vertexShader = shader.vertexShader.replace(
            `#include <defaultnormal_vertex>`,
            THREE.ShaderChunk.defaultnormal_vertex.replace(
                `vec3 transformedNormal = objectNormal`, 
                `vec3 transformedNormal = displacedNormal;`
            )
        )
    }

    return(
        <meshPhysicalMaterial
        onBeforeCompile={ (shader) => attachCustomShader(shader)}
        color='silver'
        roughness={0.2}
        reflectivity={1.0}
        />
    )
}
export default DistortMaterial