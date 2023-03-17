import Link from 'next/link'
import styles from '../styles/navbar.module.css'

function Navbar() {
    return(
        <div className={styles.navlist}>
            <Link href='#'> projects </Link>
            <Link href='#'> playground </Link>
            <Link href='#'> blog </Link>
            <Link href='#'> about </Link>
        </div>
    )
}
export default Navbar