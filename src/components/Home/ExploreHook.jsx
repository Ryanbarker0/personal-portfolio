import React from 'react';
import { useSpring, animated } from 'react-spring';

const ExploreComponent = () => {
    const [props] = useSpring({
        opacity: 1,
        color: 'white',
        from: { opacity: 0 },
        delay: '2000'
    })
    return <animated.div style={props}>Explore</animated.div>
}

export default ExploreComponent;