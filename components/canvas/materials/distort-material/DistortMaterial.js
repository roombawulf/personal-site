import * as THREE from 'three'
import CustomShaderMaterial from 'three-custom-shader-material'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import vertexShader from './shaders/vertexShader.glsl'
import fragmentShader from './shaders/fragmentShader.glsl'


// const DistortMaterial = shaderMaterial(
//     { time: 0.0, color: new THREE.Color('orange')},
//     vertexShader,
//     fragmentShader
// )
// export default DistortMaterial


function DistortMaterial() {

    const material = useRef()

    useFrame((state, _) => {
        material.current.uniforms.time.value = state.clock.elapsedTime
    })

    return(

        <CustomShaderMaterial
        ref={material}
        baseMaterial={THREE.MeshPhysicalMaterial}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{ 
            time: { value: 0.0 }, 
            color: {value: new THREE.Color('white')} 
        }}
        roughness={0.2}
        metalness={0.75}
        color='orange'
        />

    )

}
export default DistortMaterial