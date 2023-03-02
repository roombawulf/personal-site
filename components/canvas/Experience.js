import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Landscape from './Landscape'

function Experience({ className }){

    return (
        <div className={ className }>
            <Canvas camera={{position: [-75,25,-75]}}>
                <Landscape />
                <OrbitControls />
            </Canvas>
        </div>
    )
}

export default Experience