import Link from "next/link"

import styles from '../styles/works.module.css'

function Works(){
    return(
        <div className={styles.works}>
            <div className={styles.projects}>
                <Link href='#'> MSc Research Project </Link>
                <div className={styles.ruleContainer}>
                    <div className={styles.rule} />
                </div>
                <Link href='#'> Wave Simulation Shader </Link>
                <div className={styles.ruleContainer}>
                    <div className={styles.rule} />
                </div>
                <Link href='#'> Particles Shader </Link>
                <div className={styles.ruleContainer}>
                    <div className={styles.rule} />
                </div>
                <Link href='#'> Game Quiz </Link>
            </div>
        </div>
    )
}
export default Works