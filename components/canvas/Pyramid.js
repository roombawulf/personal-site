import { extend, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"

import DistortMaterial from './materials/distort-material/DistortMaterial'

function Pyramid(){

    const { nodes } = useGLTF('/models/pyramid.glb')
    const pyramid = useRef()
    const material = useRef()

    useFrame((state, delta) => {
        const { clock } = state
        pyramid.current.rotation.y = clock.elapsedTime * 0.1
    })

    return(
        <mesh
        geometry={nodes.Cube.geometry}
        rotation={[Math.PI, 0 , 0]}
        ref={pyramid}
        >
            <DistortMaterial />
        </mesh>
    )
}
export default Pyramid