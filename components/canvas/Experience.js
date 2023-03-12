import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Environment } from '@react-three/drei'
import Pyramid from './Pyramid'
import Background from './Background'
import { EffectComposer, Noise } from '@react-three/postprocessing'

function Experience({ className }){

    return (
        <div className={className}>
            <Canvas>
                <Perf />
                <Background />
                <Environment near={0.1} far={100} resolution={64}>
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
