import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ExploreHook from './ExploreHook'
import BackgroundAnim from '../Particles/BackgroundAnim'
import './Home.css'

class Home extends Component {

    render () {
        return (
            <div>
                <div className='hero'>
                    <div className='hero-inner'>
                    <h1>R G B</h1>
                    <h3>R Y A N <strong>B A R K E R</strong></h3>
                        <ExploreHook />
                    </div> 
                </div>
                <div className="canvas">
                 <BackgroundAnim />
                </div>
            </div>
        )
    }
}

export default Home