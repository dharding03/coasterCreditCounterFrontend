import React from 'react';
import './Home/HomePageVideo';

function HomePageVideo() {
    return (
        <div>
            <video id="background-video" loop autoplay>
                <source src={furyVideo.MOV} type="video"/>
                    
            </video>
        </div>
            )
}

export default HomePageVideo;