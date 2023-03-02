import { useMemo, useRef } from 'react';
import { useFrame, createPortal, extend } from '@react-three/fiber';
import { useFBO, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three'

import fragmentShader from './shaders/landscape/fragmentShader.glsl'
import vertexShader from './shaders/landscape/vertexShader.glsl'

import simFragmentShader from './shaders/landscape/simFragmentShader.glsl'
import simVertexShader from './shaders/landscape/simVertexShader.glsl'


const TerrainTexture = shaderMaterial(
    { u_time: 0.0 },
    simVertexShader,
    simFragmentShader
)
extend({ TerrainTexture })

const TerrainMaterial = shaderMaterial(
    { u_terrainTexture: null },
    vertexShader,
    fragmentShader
)
extend({ TerrainMaterial })

function Landscape(){

    const size = 250;

    const terrainTexture = useRef()
    const landscape = useRef()

    const simData = useMemo(() => {
        return {
            scene: new THREE.Scene(),
            camera: new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1),
            positions: new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]),
            uvs: new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0])
        }
    },[])

    const renderTarget = useFBO(size, size, {
        format: THREE.RGBAFormat,
        stencilBuffer: false,
        type: THREE.FloatType
    })

    useFrame((state) => {
        const { gl, clock } = state
        
        gl.setRenderTarget(renderTarget)
        gl.clear()
        gl.render(simData.scene, simData.camera)
        gl.setRenderTarget(null);

        terrainTexture.current.u_time = clock.elapsedTime
        landscape.current.u_terrainTexture = renderTarget.texture
        
    })

    return(
        <>
            {createPortal(
                <mesh>
                    <terrainTexture ref={terrainTexture} key={TerrainTexture.key}/>
                    <bufferGeometry>
                        <bufferAttribute
                        attach='attributes-position'
                        count={simData.positions.length / 3}
                        array={simData.positions}
                        itemSize={3}
                        />
                        <bufferAttribute
                        attach='attributes-uv'
                        count={simData.uvs.length / 2}
                        array={simData.uvs}
                        itemSize={2}
                        />
                    </bufferGeometry>
                </mesh>,
                simData.scene
            )}
            <mesh rotation={[-Math.PI /2, 0, 0]} scale={100}>
                <planeGeometry 
                args={[size/100,size/100,size,size]}
                />
                <terrainMaterial ref={landscape} key={TerrainMaterial.key}/>
            </mesh>
        </>
    )
}

export default Landscape