import About from '../components/About'
import Landing from '../components/Landing'
import Spacer from '../components/Spacer'

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
        </>
    ) 
}
export default Home