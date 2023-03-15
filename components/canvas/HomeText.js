import { Text, shaderMaterial } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { use, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import * as THREE from 'three'
import gsap from 'gsap'



function HomeText(){
    
    const [hovered, setHovered] = useState(null)
    const color = useMemo(() => {
        return new THREE.Color()
    }, [hovered])
    const {size} = useThree()
    const text = useRef()

    const over = (e) => (e.stopPropagation(), setHovered(true))
    const out = () => {setHovered(false)}

    useFrame((state, delta) => {
        text.current.material.color.lerp(color.set(hovered ? 'salmon' : 'black'), 0.2)
    })

    useLayoutEffect(() => {
        let context = gsap.context(() => {
            gsap.to(text.current, { fillOpacity: 1, ease: 'power2.inOut', duration: 1.5, delay: 1.5})
        })
    })

    return (
            <Text 
                ref={text}
                font='/fonts/cairo-v22-latin-regular.woff'
                lineHeight={0.7}
                fontSize={2 * size.width/size.height}
                color='black'
                fillOpacity={0}
                letterSpacing={0.2}
                onPointerOver={over}
                onPointerOut={out}
                >
                    HARIS
            </Text>
    )
}
export default HomeText