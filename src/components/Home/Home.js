import React, { Component } from 'react';
import './Home.css'

class Home extends Component {

    render () {
        return (
            <div className='hero'>
                <div className='hero-inner'>
                <h1>Ryan Barker Portfolio</h1>
                    <p>Im Text To Fill The Page</p>
                    <a href="/projects" className="btn"> find out more </a>
                </div> 
            </div>
        )
    }
}

export default Home