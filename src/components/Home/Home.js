import React, { Component } from 'react';
import './Home.css'

class Home extends Component {

    render () {
        return (
            <div className='hero'>
                <div className='hero-inner'>
                <h1>R G B</h1>
                    <h4>Portfolio &
                    Project Showcase</h4>
                    <a href="/projects/snapspot" className="btn"> Discover </a>
                </div> 
            </div>
        )
    }
}

export default Home