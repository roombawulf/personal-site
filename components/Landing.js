import Experience from "./canvas/Experience"
import styles from '../styles/landing.module.css'
import gsap from 'gsap'
import { useEffect, useRef } from "react"

function Landing(){

    return (
        <div className={styles.landingContainer}>
            <div className={styles.greeting}>
                Hi,
            </div>
            <div className={styles.greeting}>
                I'm a software developer and love being creative.
            </div>
        </div>
    )
}
export default Landing