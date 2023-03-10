import Experience from "../components/canvas/Experience"
import Works from "../components/works"
import Contact from "../components/contact"

import { getWorksData } from "../lib/works"
export async function getStaticProps() {
    const allWorksData = getWorksData()
    return {
        props: {
            allWorksData
        }
    }
}

function Main( { allWorksData }) {
    return( 
            <>
                <Experience className={'canvas'} />
                <div className='gradient-merge'></div>
                <Works data={allWorksData}/>
                <Contact />
            </>
            
    ) 
}
export default Main