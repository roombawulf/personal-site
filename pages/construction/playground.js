import Link from "next/link"

import styles from '../../styles/construction.module.css'

function Playground(){
    return (
        <div className={styles.container}> 
            <div className={styles.warning}>The playground is being developed...</div>
            <div className={styles.message}>
                The playground will be an interactable WebGL experience for the stuff I create. Someday I will finish it... 
            </div>
            <Link href='/' className={styles.homeLink}> Go back </Link>
        </div>
    )
}
export default Playground