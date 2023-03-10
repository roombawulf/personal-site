import { useFrame } from "@react-three/fiber"
import { useGLTF, CubeCamera, MeshRefractionMaterial, MeshTransmissionMaterial } from "@react-three/drei"
import { useEffect, useRef, useMemo } from "react"
import { Vector3 } from "three"


import DistortMaterial from './materials/distort-material/DistortMaterial'

function Pyramid({ texture }){

    const { nodes } = useGLTF('/models/pyramid.glb')
    const pyramid = useRef()
    const group = useRef()
    const material = useRef()

    const rotationAxis = useMemo(() => {
        return new Vector3(0.9238795, 0, 0.3826834)
    },[])
    
    useFrame(({ clock }, delta) => {

        group.current.rotateOnAxis(rotationAxis,delta * 0.1)

    })

    return(
        <group ref={group}>
            <mesh
            geometry={nodes.Cube.geometry}
            scale={1}
            rotation={[Math.PI/8, -Math.PI/8, -Math.PI/2]}
            ref={pyramid}
            >
                <DistortMaterial />
            </mesh>
        </group>
    )
}
export default Pyramid