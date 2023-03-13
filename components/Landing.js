import Experience from "./canvas/Experience"
import styles from '../styles/landing.module.css'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from "react"

function Landing(){

    const topline = useRef()
    const bottomline = useRef()

    useLayoutEffect(() => {
        let context = gsap.context(() => {
            gsap.to([topline.current, bottomline.current], {width: '95%', ease: 'power2.inOut', duration: 2, delay: 1, stagger: 0.2})
        })
    })

    return (
        <div className={styles.landingContainer}>
            <div className={styles.ruleContainer}>
                <div className={styles.lineRule} ref={topline}/>
            </div>
            
            <div className={styles.canvasContainer}>
                <Experience />
            </div>
            
            <div className={styles.ruleContainer}>
                <div className={styles.lineRule} ref={bottomline} />
            </div>
        </div>
    )
}
export default Landing