import React from 'react';
import '../HomePage/Home/'
import furyVideo from './furyVideo.mp4';

function HomePageVideo() {
    return (
        <div>
            <video id="background-video" loop autoPlay>
                <source src={furyVideo} type="video/mp4"/>
                    
            </video>
        </div>
            )
}

export default HomePageVideo;