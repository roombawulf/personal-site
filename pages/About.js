import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/about.module.css'
import Section from '../components/Section'



function About(){

    return (
        <Section sectionID={'about'} lgTitle={'About'} smTitle={'عن'}>
            <div className={styles.grid}>
                <div className={styles.title}>
                    Haris Raza
                </div>
                <div className={styles.description}>
                    I am from the UK, born in Northern Ireland, and have roots in Pakistan.
                    At university, I studied mechanical and electrical engineering. My passion is in
                    creative design, both in UI/UX and graphical technologies. So, I found out about WebGL
                    and have been continously learning how it works, its capabilities and made this site to
                    showcase what can be done with it.
                </div>
                <div className={styles.links}>
                    <a href={'https://github.com/roombawulf'} className={styles.link} target='_blank'>
                        github
                    </a>
                    <a href={'https://twitter.com/roombawulf'} className={styles.link} target='_blank'>
                        twitter
                    </a>
                </div>
                <div className={styles.picture}>
                    <Image 
                    src={'/images/me.png'}
                    fill
                    style={{objectFit: 'cover'}}
                    />
                </div>
            </div>
        </Section>
    )
}
export default About