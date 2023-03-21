import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import sectionStyles from '../styles/section.module.css'

function Section({sectionID, smTitle, lgTitle, children}){

    const section = {
        offscreen: {opacity: 1},
        onscreen: { 
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const heading = {
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
        <motion.section className={sectionStyles.section} id={sectionID} variants={section} initial="offscreen" whileInView="onscreen" viewport={{ once: true }}>
            <motion.div className={sectionStyles.smtitle} variants={heading}>
                {smTitle}   
            </motion.div>
            <motion.div className={sectionStyles.lgtitle} variants={heading}>
                {lgTitle}
            </motion.div>
            <div className={sectionStyles.content}>
                {children}
            </div>
        </motion.section>
    )

}
export default Section