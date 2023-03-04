import { MeshReflectorMaterial } from "@react-three/drei"

function FloorMirror(){
    return(
        <mesh position={[0, -1, 0]} rotation={[-Math.PI/2, 0, 0]}>
            <planeGeometry args={[100,100]}/>
            <MeshReflectorMaterial
            blur={[100, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={50}
            roughness={1.0}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.2}
            color='#050202'
            metalness={0.5}
            />
        </mesh>
    )
}
export default FloorMirror