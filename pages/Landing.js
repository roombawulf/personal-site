import Experience from "../components/canvas/Experience"
import styles from '../styles/landing.module.css'

function Landing(){

    return (
        <div className={styles.landingContainer} id='landing'>
            <Experience />
        </div>
    )
}
export default Landing