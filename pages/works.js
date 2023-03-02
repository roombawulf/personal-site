import Link from 'next/link'

import { getWorksData } from "../lib/works"

export async function getStaticProps() {
    const allWorksData = getWorksData()
    return {
        props: {
            allWorksData
        }
    }
}
function Works( { allWorksData }) {
    return (
        <ProjectsGrid data={allWorksData}/>
    )
}

function ProjectsGrid({ data }){
    
    return (
        <div>
            {data.map(({title, description, link}) => (
                <div key={title}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Link href='/'>{link}</Link>
                </div>
            ))}
        </div>
    )

}
export default Works