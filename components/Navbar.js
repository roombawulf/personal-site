import Link from 'next/link'
import { useEffect } from 'react';
import styles from '../styles/navbar.module.css'

const ScrollLink = ({ handleNav, nav, mobile, children, ...props }) => {
    const handleScroll = (e) => {
      e.preventDefault();
      //close menu
      if(mobile === true){
        handleNav()
      }
      //remove everything before the hash
      const targetId = e.currentTarget.href.replace(/.*\#/, "");
      const elem = document.getElementById(targetId);
      elem.scrollIntoView({
        behavior: "smooth",
      });
    };
    return (
      <Link {...props} onClick={handleScroll}>
        {children}
      </Link>
    );
};


function Navbar({ handleNav, nav, mobile }) {

    return(
        <div className={styles.navlist}>
            <ScrollLink href='#landing' className={styles.name} handleNav={handleNav} mobile={mobile}> حارس </ScrollLink>
            <ScrollLink href='#projects' handleNav={handleNav} mobile={mobile}> projects </ScrollLink>
            <ScrollLink href='#about' handleNav={handleNav} mobile={mobile}> about </ScrollLink>
            <Link href='/construction/playground' className={styles.navbroken}> playground </Link>
            <Link href='/construction/blog' className={styles.navbroken}> blog </Link> 
        </div>
    )
}
export default Navbar