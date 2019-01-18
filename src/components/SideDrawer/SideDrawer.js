import React from 'react';
import { Link } from 'react-router-dom'
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
                <Link to='/projects/snap-spot' className='item'>
                    <IconContext.Provider value={{ className: 'icon' }}>
                        <FaRocket /> 
                    </IconContext.Provider> Projects
                </Link> 
            </li>
            <li>
                <Link to='/about' className='item'>
                    <IconContext.Provider value={{ className: 'icon' }}>
                        <FaUserCircle />
                    </IconContext.Provider> About
                </Link>
            </li>
            <li>
                <Link to='#' className='item'>
                    <IconContext.Provider value={{ className: 'icon' }}>
                        <FaEnvelope />
                    </IconContext.Provider> Contact
                </Link>
            </li>

        </ul>
    </nav>
    )
}

export default sideDrawer