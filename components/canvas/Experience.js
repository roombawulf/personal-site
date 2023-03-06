import { useRef } from 'react'

import { OrbitControls, Environment, useHelper } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

import * as THREE from 'three'
import { RectAreaLightHelper } from 'three-stdlib'

import FloorMirror from './FloorMirror'
import Pyramid from './Pyramid'
import Background from './Background'

function Experience({ className }){

    return (
        <div className={ className }>
            <Canvas>
                <Background />
                {/* <ambientLight color='orange' /> */}
                <Pyramid />
                <Environment near={1} far={100} resolution={128}>
                    <Background />  
                </Environment>
                <OrbitControls />
            </Canvas>
        </div>
    )
}
export default Experience
