import React from 'react';
import './SideDrawer.css'

import { IconContext } from 'react-icons'
import { FaRocket, FaUserCircle, FaEnvelope } from 'react-icons/fa'

const sideDrawer = props => {

    let drawerClasses= 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (<nav className={drawerClasses}>
        <ul>
            <li> 
                <a href='/projects'>
                    <IconContext.Provider value={{ className: 'icon' }}>
                        <FaRocket /> 
                    </IconContext.Provider> Projects
                </a> 
            </li>
            <li>
                <a href='/about'>
                    <IconContext.Provider value={{ className: 'icon' }}>
                        <FaUserCircle />
                    </IconContext.Provider> About
                </a>
            </li>
            <li>
                <a href='#'>
                    <IconContext.Provider value={{ className: 'icon' }}>
                        <FaEnvelope />
                    </IconContext.Provider> Contact
                </a>
            </li>

        </ul>
    </nav>
    )
}

export default sideDrawer