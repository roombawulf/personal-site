import Link from 'next/link'    

import headerStyles from './header.module.css'

function NavItem({path, children}){
    return(
        <Link href={path} className={headerStyles.navlink}>
            {children}
        </Link>
    )
}

function Header({ className }){
    return(
        <header className={className}>
            <NavItem path='#'> Haris. </NavItem>
            <NavItem path='#works'> Works. </NavItem>
            <NavItem path='#contact'> Contact. </NavItem>
        </header>
    )
}

export default Header



