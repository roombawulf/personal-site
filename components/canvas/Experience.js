import { Canvas } from "@react-three/fiber"
import HomeText from "./HomeText"
import Prism from "./Prism"

function Experience(){
    return(
        <Canvas>
            <color attach="background" args={['#FAEDCD']} />
            <HomeText />
            <Prism />
        </Canvas>
    )
}
export default Experience