import React, { useState } from 'react'
import MenuIcon from './MenuIcon'

function TopNav() {
    const [activeClass, setActiveClass] = useState('');
    const [activeSubmenu, setActiveSubMenu] = useState('');
    return (
        <nav>
            <ul className='top-nav'>
                <div className={`container ${activeClass}`}>
                    <li><a href="">SO FUNKTIONIERT'S</a></li>
                    <li><a href="">SONDERANGEBOTE</a></li>
                    <li className={`with-submenu ${activeSubmenu}`}  onClick={()=>setActiveSubMenu(activeSubmenu === '' ? 'submenu-active' : '')}>
                        <a><i className='user-icon'></i> MEIN BEREICH <i className='dropdown-icon'></i></a>
                        <ul>
                            <li>My published jokes</li>
                            <li>My saved jokes</li>
                            <li>Account Information</li>
                            <li>Publish new joke</li>
                        </ul>
                    </li>
                    <li className={`mobile-toggle ${activeClass}`} onClick={()=>setActiveClass(activeClass === '' ? 'active' : '')}><MenuIcon/></li>
                </div>
            </ul>
        </nav>
    )
}

export default TopNav