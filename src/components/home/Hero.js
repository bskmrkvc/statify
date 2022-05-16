import React from 'react'
import './HeroStyles.css'

import Video from '../../assets/videos/heroVideo.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h1 className = "heroText1">Welcome to Statify.</h1>
                <br></br><br></br>
                <h2 className = "heroText2">Place where basketball<br></br>meets analytics.</h2>
            </div>
        </div>
    )
}

export default Hero