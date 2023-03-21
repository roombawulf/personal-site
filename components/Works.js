import Link from "next/link"
import Image from "next/image"

import { motion } from "framer-motion"


import workStyles from '../styles/works.module.css'
import Section from "./Section"

function ProjectsCard({ data }){
    
    const card = {
        offscreen: {opacity: 1},
        onscreen: { 
            transition: {
                staggerChildren: 0.5
            }
        }
    }

    const cardItems = {
        offscreen: { opacity: 0 },
        onscreen: { 
            opacity: 1,
            transition: {
                ease: "easeIn",
                duration: 0.5
            }
        }
    }
    
    return(
        <div className={workStyles.cardContainer}>
            {data?.map((project) => 
                <motion.div className={workStyles.card} key={project.id} variants={card} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
                    <motion.div className={workStyles.picture} variants={cardItems}>
                        <Image 
                            src={`/images/${project.image}`}
                            alt={project.id}
                            fill
                            className={workStyles.picture}
                        />
                    </motion.div>
                    <motion.div className={workStyles.title} variants={cardItems}>
                        {project.title}
                    </motion.div>
                    <motion.div className={workStyles.description} variants={cardItems}>
                        {project.description}
                    </motion.div>
                </motion.div>
            )}
        </div>

    )
}


function Works({ data }){
    return(
        <Section sectionID={'projects'} smTitle={'المشاريع'} lgTitle={'Projects'}>
            <ProjectsCard data={data} />
        </Section>
    )
}
export default Works