import React from 'react';
import './HomePage.css'
import Zoom from 'react-reveal/Zoom'
import Roll from 'react-reveal/Roll'
import Slide from 'react-reveal/Slide'

function HomePage() {
    return (
        <div className="banner-bg">
            <div className="banner-text">
                <Zoom top>
                    <h6> NOW YOU CAN WATCH THE TALENT</h6>
                </Zoom>
                <Roll left>
                <p> Let's Explore Idea</p>
                </Roll>
                <Slide bottom>
                <button> EXPLORE NOW</button>
                </Slide>
            </div>

        </div>
    )
}

export default HomePage
