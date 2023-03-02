import { MeshReflectorMaterial, Environment } from "@react-three/drei"

function FloorMirror(){
    return(
        <>
            <mesh position={[0, -1, 0]} rotation={[-Math.PI/2, 0, 0]}>
                <planeGeometry args={[10,10]}/>
                <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={50}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#050505"
                metalness={0.5}
                />
            </mesh>
            <Environment preset="city" />
        </>
    )
}
export default FloorMirror