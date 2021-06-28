import React from 'react';
import './Home/HomePageVideo';

function HomePageVideo() {
    return (
        <div>
            <video id="background-video" loop autoPlay>
                <source src={furyVideo.mp4} type="video"/>
                    
            </video>
        </div>
            )
}

export default HomePageVideo;