import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import ExploreHook from './ExploreHook'
import './Home.css'

class Home extends Component {

    render () {
        return (
            <div className='hero'>
                <div className='hero-inner'>
                <h1>R G B</h1>
                    <h4>Portfolio &
                    Project Showcase</h4>
                    <Link to="/projects/snap-spot" className="btn"> Explore </Link>
                </div> 
            </div>
        )
    }
}

export default Home