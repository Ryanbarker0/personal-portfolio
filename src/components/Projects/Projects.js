import React, { Component } from 'react';
import Swup from 'swup'

class Projects extends Component {

    render() {
        return (
            <div>
            <h2>The Projects Page</h2>
            <ul>
                <li>
                    <a href='/projects/snapspot'>SnapSpot</a>
                </li>
                <li>
                    <a href='/projects/quizbuzz'>Quiz Buzz</a>
                </li>
            </ul>
            </div>
        )
    }
}

export default Projects