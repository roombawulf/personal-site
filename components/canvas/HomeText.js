import { Text, shaderMaterial } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import * as THREE from 'three'
import gsap from 'gsap'



function HomeText(){

    const {size} = useThree()
    const text = useRef()

    const properties = {
        font: '/fonts/cairo-v22-latin-regular.woff',
        color: 'black',
        fillOpacity: 0,
    }

    useEffect(() => {
        let context = gsap.context(() => {
            gsap.to(text.current, { fillOpacity: 1, ease: 'power2.inOut', duration: 0.5})
        })
        console.log(size)
    })

    return (
        <Text 
            ref={text}
            font={properties.font}
            fontSize={size.width/size.height}
            color={properties.color}
            fillOpacity={properties.fillOpacity}
            maxWidth={`${size.width}px`}
            >
                Software Developer
        </Text>
)
}
export default HomeText