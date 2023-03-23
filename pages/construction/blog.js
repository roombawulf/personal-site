import Link from "next/link"

import styles from '../../styles/construction.module.css'

function Blog(){
    return (
        <div className={styles.container}> 
            <div className={styles.warning}>The blog is still in writing...</div>
            <div className={styles.message}>
                I plan to create a blog to share the stuff I learn. 
            </div>
            <Link href='/' className={styles.homeLink}> Go back </Link>
        </div>
    )
}
export default Blog