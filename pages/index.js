import About from '../components/About'
import Landing from '../components/Landing'
import Spacer from '../components/Spacer'
import Works from '../components/Works'
import Navbar from '../components/Navbar'

import styles from '../styles/layout.module.css'

import { getWorksData } from "../lib/works"
import { useEffect } from 'react'
export async function getStaticProps() {
    const allWorksData = getWorksData()
    return {
        props: {
            allWorksData
        }
    }
}

function Home({ allWorksData }) {

    return( 
        <div className={styles.grid}>
            <div className={styles.nav}>
                <Navbar />
            </div>
            <div className={styles.main}>
                <Landing />
                <Spacer />
                <Works data={allWorksData} />
            </div>
                
        </div>
    ) 
}
export default Home