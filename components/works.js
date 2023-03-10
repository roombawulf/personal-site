import Image from "next/image"
import Link from "next/link"
import styles from '../styles/works.module.css'

function Works( { data }) {
    return (
        <ProjectsGrid data={data}/>
    )
}

function ProjectsGrid({ data }){

    return (
        <section className='works-container' id='works'>
            <div className={styles.grid}>
            {data?.map(({title, description, link, image}) => (
                <div key={title} className={styles.card}>
                    <div className={styles.cardImage}>
                        <Image 
                        src={`/images/${image}`} 
                        fill
                        alt={description} 
                        />
                    </div>
                    <span className={styles.cardTitle}>{title}</span>
                    <span className={styles.cardDesc}>{description}</span>
                    <Link className={styles.cardLink} href={link}>DEMO</Link>
                </div>
            ))}
            </div>
        </section>
    )

}
export default Works