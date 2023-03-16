import About from '../components/About'
import Landing from '../components/Landing'
import Spacer from '../components/Spacer'
import Works from '../components/Works'

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
        <>
            <Landing />

            <Spacer />

            <About />

            <Spacer />

            <Works />    
        </>
    ) 
}
export default Home