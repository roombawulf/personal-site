import Landing from '../components/Landing'

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
        <Landing />    
    ) 
}
export default Home