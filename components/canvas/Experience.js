import { useRef } from 'react'

import { OrbitControls, Environment, useHelper } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import * as THREE from 'three'
import { RectAreaLightHelper } from 'three-stdlib'

import FloorMirror from './FloorMirror'
import Pyramid from './Pyramid'

function Experience({ className }){

    return (
        <div className={ className }>
            <Canvas>
                <Lights />
                <ambientLight color={'red'} intensity={0.75} />
                <Pyramid />
                <FloorMirror />
                <Environment preset='night' />
                <OrbitControls />
            </Canvas>
        </div>
    )
}

export default Experience

function Lights(){
    
    const rectLight = useRef()
    useHelper(rectLight, RectAreaLightHelper, 'blue')

    return (
        <rectAreaLight 
        width={3}
        height={2}
        color='coral'
        intensity={10} 
        ref={rectLight} 
        position={[0,1,5]} 
        rotation={[0, 0, 0]} 
        />
    )

}