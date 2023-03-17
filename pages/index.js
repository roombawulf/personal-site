import About from '../components/About'
import Landing from '../components/Landing'
import Spacer from '../components/Spacer'
import Works from '../components/Works'
import Navbar from '../components/Navbar'

import styles from '../styles/layout.module.css'

import { getWorksData } from "../lib/works"
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
                <Works />
            </div>
                
        </div>
    ) 
}
export default Home