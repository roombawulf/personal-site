import { extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import DistortMaterial from "./materials/distort-material/DistortMaterial"

extend({ DistortMaterial })

function Pyramid(){

    const material = useRef()

    useFrame((state, delta) => {
        const { clock } = state

        material.current.time = clock.elapsedTime

    })

    return(
        <mesh>
            <icosahedronGeometry args={[1, 128]} />
            <distortMaterial key={DistortMaterial.key} ref={material} color='orange'/>
        </mesh>
    )
}
export default Pyramid