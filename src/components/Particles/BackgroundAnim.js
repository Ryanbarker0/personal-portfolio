import React, { Component } from 'react';
import Particles from 'react-particles-js'
import 'assets/rgb.svg'

class BackgroundAnim extends Component {

render() {
    return (
        <Particles
            params={particleOpt}
            style={styles.animatedContent} 

            />
        )
    }
}

export default BackgroundAnim


const particleOpt = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 5,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
}

const styles = {
    animatedContent: {
        background: 'linear-gradient(45deg, rgb(69, 72, 77) 0%, rgb(0, 0, 0) 100%)'
    }
}