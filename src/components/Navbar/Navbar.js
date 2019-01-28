import React, { Component }  from 'react';
import { Link } from "react-router-dom";
import './nav.css'
import resume from './files/resume.pdf'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const Navbar = props => (
    <header className='navbar'>
        <nav className='navbar__navigation'>
            <div className="navbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className='navbar__logo'><Link to='/home'>R G B</Link></div>
            <div className='spacer' />
            <div className='navbar_navigation-items'>
            <div className='container borderXwidth'>
                
                    <Link to='/projects/snap-spot'>Projects</Link>
                    <Link to='/about'>About</Link>
                    <a href={resume} target="_blank">Résumé</a>
                </div>
            </div>
        </nav>
    </header>
)


export default Navbar
