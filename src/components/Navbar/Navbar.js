import React, { Component }  from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import './nav.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const Navbar = props => (
    <header className='navbar'>
        <nav className='navbar__navigation'>
            <div className="navbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className='navbar__logo'><a href='/'>LOGO</a></div>
            <div className='spacer' />
            <div className='navbar_navigation-items'>
                <ul>
                    <li><a href='/projects'>Projects</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </div>
        </nav>
    </header>
)


export default Navbar
