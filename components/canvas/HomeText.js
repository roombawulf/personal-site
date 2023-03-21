import { Text, shaderMaterial } from "@react-three/drei"
import { useFrame, useThree, extend } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import gsap from 'gsap'


import vertexShader from './materials/text-material/vertexShader.glsl'
import fragmentShader from './materials/text-material/fragmentShader.glsl'
const TextMaterial = shaderMaterial(
    { time: 0.0, hover: 0.0 },
    vertexShader,
    fragmentShader
)
extend({ TextMaterial })

function HomeText(){

    const [hover, setHover] = useState(null)
    const {size, viewport} = useThree()
    const text = useRef()
    const material = useRef()

    const properties = window.innerWidth < 1000
    ? { string: 'Creative Software Developer', scale: 1.8, width: viewport.width/2, align: 'center' }
    : { string: 'Hi, I am a Software Developer and love getting creative', scale: 0.8, width: viewport.width, align: 'left' }

    const over = () => {setHover(true)}
    const out = () => {setHover(false)}
    const animateHover = (value) => {
        gsap.to(material.current, {
            hover: value,
            duration: 1.0,
            ease: "power3.out"
        })
    }

    useEffect(() => {
        if (text.current){
            if(hover){animateHover(1.0)}
            if(!hover){animateHover(0.0)}
        }
    })

    useFrame(({clock}) => {
        material.current.time = clock.elapsedTime
    })

    return (
        <Text 
            ref={text}
            font='/fonts/cairo-v22-latin-regular.woff'
            fontSize={properties.scale * size.width/size.height}
            maxWidth={properties.width}
            textAlign={properties.align}
            lineHeight={1.2}
            outlineWidth={'1%'}
            onPointerOver={over}
            onPointerOut={out}
            >
                {properties.string}
                <textMaterial ref={material} key={TextMaterial.key}/>
        </Text>
)
}
export default HomeText