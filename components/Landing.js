import Experience from "./canvas/Experience"
import styles from '../styles/landing.module.css'
import gsap from 'gsap'
import { useEffect, useRef } from "react"

function Landing(){

    return (
        <div className={styles.landingContainer}>
            <Experience />
        </div>
    )
}
export default Landing