import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom'

import './Home.css'

const ExploreComponent = () => {
    const [props] = useSpring({
        opacity: 1,
        color: 'white',
        from: { opacity: 0 },
        delay: '500'
        })
    return <animated.div style={props}>
                <Link to="/projects/snap-spot" className='btn'>
                    Explore 
                </Link>
            </animated.div>
}

export default ExploreComponent;