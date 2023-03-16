import styles from '../styles/navbar.module.css'

function Navbar() {
    return(
        <>
            <div className={styles.name}> Haris. </div>
            <ul className={styles.navlist}>
                <li> projects </li>
                <li> playground </li>
                <li> blog </li>
                <li> about </li>
            </ul>
        </>
    )
}
export default Navbar