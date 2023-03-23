import Landing from './Landing'
import Works from './Works'
import About from './About'

import Spacer from '../components/Spacer'
import Navbar from '../components/Navbar'

import styles from '../styles/layout.module.css'

import { getWorksData } from "../lib/works"
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
export async function getStaticProps() {
    const allWorksData = getWorksData()
    return {
        props: {
            allWorksData
        }
    }
}

function Home({ allWorksData }) {

    const [nav, setNav] = useState(false)
    const [mobile, setMobile] = useState(true)
    const desktopNav = useRef()
    const mobileNav = useRef()

    const toggleNav = () => setNav(!nav)

    useEffect(() => {
        if (window.innerWidth < 1000) {
            setMobile(true)
        }
        else {setMobile(false)}
    })

    useEffect(() => {
        const detectResize = () => {
            if (window.innerWidth < 1000) {
                setMobile(true)
            }
            else {
                setMobile(false)
                setNav(false)
            }
        }
        window.addEventListener('resize', detectResize)

        return () => {window.removeEventListener('resize', detectResize)}
    })
    
    const navVariants = {
        open: {
            display: 'block',
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 },
          },
        closed: { opacity: 0, y: -100, transition: { duration: 0.2 }, transitionEnd: { display: 'none' } }
    }

    return( 
        <div className={styles.grid}>
            
            {mobile
            ?   <>
                    <motion.nav className={styles.navMobile} ref={mobileNav} variants={navVariants} initial={'closed'} animate={nav ? 'open' : 'closed'}>
                        <Navbar handleNav={toggleNav} nav={nav} mobile={mobile} />
                    </motion.nav>
                    <button className={styles.burger} onClick={toggleNav}>
                        /////
                    </button>
                </>
            :   <nav className={styles.navDesktop} ref={desktopNav}>
                    <Navbar/>
                </nav>
            }

            <div className={styles.main}>
                <Landing />
                <Spacer />
                <Works data={allWorksData} />
                <Spacer />
                <About />
            </div>
                
        </div>
    ) 
}
export default Home