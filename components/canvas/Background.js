import { useRef } from 'react'
import { BackSide } from 'three'
import { extend, useFrame } from '@react-three/fiber'
import BackgroundMaterial from './materials/background-material/BackgroundMaterial'

extend({ BackgroundMaterial })

function Background(){

    const material = useRef()

    useFrame(({ clock }) => {
        material.current.time = clock.elapsedTime * 0.5
    })

    return(
        <mesh scale={10}>
            <sphereGeometry />
            <backgroundMaterial 
            ref={material}
            key={BackgroundMaterial.key} 
            side={BackSide}
            />
        </mesh>
    )
}
export default Background