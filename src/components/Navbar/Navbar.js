import React, { Component }  from 'react';
import { Link } from "react-router-dom";
import './nav.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const Navbar = props => (
    <header className='navbar'>
        <nav className='navbar__navigation'>
            <div className="navbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className='navbar__logo'><Link to='/'>R G B</Link></div>
            <div className='spacer' />
            <div className='navbar_navigation-items'>
            <div className='container borderXwidth'>
                
                    <Link to='/projects/snap-spot'>Projects</Link>
                    <Link to='/about'>About</Link>
                </div>
            </div>
        </nav>
    </header>
)


export default Navbar
