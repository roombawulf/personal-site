import { useFBO } from '@react-three/drei'
import { extend, useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'

import { TransparentMaterial } from './materials/transparent-material/TransparentMaterial'


extend({ TransparentMaterial })

function Prism(){

    const {viewport, size} = useThree()
    const prism = useRef()
    const renderTarget = useFBO()

    useFrame((state, delta) => {
        const {gl, scene, camera} = state
        prism.current.visible = false
        gl.setRenderTarget(renderTarget)
        gl.render(scene, camera)

        prism.current.material.u_texture = renderTarget.texture
        gl.setRenderTarget(null)
        prism.current.visible = true

        prism.current.rotation.y += delta * 0.1
    })

    return(
        <>
            <mesh ref={prism} position={[1, 0, 2]} scale={0.4}>
                <coneGeometry args={[5, 10, 8, 1]} />
                <transparentMaterial 
                    u_res={[
                        size.width * viewport.dpr,
                        size.height * viewport.dpr
                    ]}
                />
            </mesh>
        </>
    )
}
export default Prism