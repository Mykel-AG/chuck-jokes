import React, { useState } from 'react'
import MenuIcon from './MenuIcon'

function TopNav() {
    const [activeClass, setActiveClass] = useState('');
    const [activeSubmenu, setActiveSubMenu] = useState('');
    return (
        <nav>
            <ul className='top-nav'>
                <div className={`container ${activeClass}`}>
                    <li className='menu'><a href="">SO FUNKTIONIERT'S</a></li>
                    <li className='menu'><a href="">SONDERANGEBOTE</a></li>
                    <li className={`menu with-submenu ${activeSubmenu}`} onClick={() => setActiveSubMenu(activeSubmenu === '' ? 'submenu-active' : '')}>
                        <a><i className='user-icon'></i> MEIN BEREICH <i className='dropdown-icon'></i></a>
                        <div className='sub-display'>
                            <div className='pointer-left'></div>
                            <div className='sub-menu-list'>
                                <ul>
                                    <li><span>My published jokes</span></li>
                                    <li><span>My saved jokes</span></li>
                                    <li><span>Account Information</span></li>
                                    <li><span>Publish new joke</span></li>
                                </ul>
                            </div>

                        </div>

                    </li>
                    <li className={`mobile-toggle ${activeClass}`} onClick={() => setActiveClass(activeClass === '' ? 'active' : '')}><MenuIcon /></li>
                </div>
            </ul>
        </nav>
    )
}

export default TopNav