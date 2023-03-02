import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import FloorMirror from './FloorMirror'
import Pyramid from './Pyramid'

function Experience({ className }){

    return (
        <div className={ className }>
            <Canvas>
                <ambientLight color='blue' />
                <Pyramid />
                <mesh position={[-2, 0, 0]}>
                    <boxGeometry />
                    <meshStandardMaterial color='hotpink' />
                </mesh>
                <FloorMirror />
                <OrbitControls />
            </Canvas>
        </div>
    )
}

export default Experience