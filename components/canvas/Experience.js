import { OrbitControls, Environment, Bounds } from '@react-three/drei'
import { Canvas,} from '@react-three/fiber'

import Pyramid from './Pyramid'
import Background from './Background'
import { EffectComposer, Noise } from '@react-three/postprocessing'

function Experience({ className }){

    return (
        <div className={className}>
            <Canvas>
                <Background />
                <Environment near={1} far={100} resolution={128}>
                    <Background />  
                </Environment>
                <Pyramid />
                <EffectComposer>
                    <Noise opacity={0.05} />
                </EffectComposer>
            </Canvas>
        </div>
    )
}
export default Experience
