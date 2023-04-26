import { Canvas } from "@react-three/fiber"
import HomeText from "./HomeText"
import Prism from "./Prism"

function Experience(){
    return(
        <Canvas>
            <color attach="background" args={['#fdf8ec']} />
            <HomeText />
            <Prism />
        </Canvas>
    )
}
export default Experience