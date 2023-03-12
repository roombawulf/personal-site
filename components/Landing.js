import Experience from "./canvas/Experience"

import styles from '../styles/landing.module.css'

function Landing(){
    return (
        <div className={styles.landingContainer}>
            <div className={styles.ruleContainer}>
                <div className={styles.lineRule} />
            </div>
            
            <div className={styles.canvasContainer}>
                <Experience />
            </div>
            
            <div className={styles.ruleContainer}>
                <div className={styles.lineRule} />
            </div>
        </div>
    )
}
export default Landing