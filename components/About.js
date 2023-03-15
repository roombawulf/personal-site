import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Spacer from './Spacer'

import styles from '../styles/about.module.css'

gsap.registerPlugin(ScrollTrigger)

function About(){
    const didAnimate = useRef(false)
    const introHeader = useRef()
    const nameHeader = useRef()
    const description = useRef()

    

    useEffect(() => {
        if (didAnimate.current) { return }
        let context = gsap.context(() => {
            let elements = [introHeader.current, nameHeader.current, description.current]
            elements.forEach((element) => {
                gsap.from(element, {
                    x:-20,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: element,
                    },
                    duration: 1.8,
                    ease: 'power3.inOut'
                })
            })
            didAnimate.current = true
        })
    })

    return (
        <div className={styles.about}>
            <section className={styles.greetings}>
                <h1 className={styles.introHeader} ref={introHeader}> 
                    Hi,
                </h1>
                <h1 className={styles.nameHeader} ref={nameHeader}> 
                    ...my name is Haris Raza.
                </h1>
            </section>
            <Spacer />
            <section className={styles.me}>
                <div className={styles.description} ref={description}>
                    <p> 
                        I am an engineer who studied a BEng in Mechanical Engineering and then a
                        MSc in Mechatronics (which is like mechanical and electrical engineering combined).
                    </p>
                    <p>
                        I also really enjoy creative design and expressing that through programming.
                        This personal website is my way to showcase just that. Please take a look around!
                    </p>
                </div>
            </section>
        </div>
    )
}
export default About