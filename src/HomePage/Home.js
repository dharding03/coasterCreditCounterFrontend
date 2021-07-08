import React from 'react';
import './Home.css';
// import LoginForm from './Login/components/loginForm';
<>
  function myFunction() {
    document.body.style.backgroundColor = "lightblue"
  }
</>

function Home() {

  return (

    <div id="video-wrapper">

      <video
        autoPlay
        muted
        loop id="background-Video">
        <source src="furyVideo.mp4" type="video/mp4" />
      </video>

      <div class="content">
        <h1>Welcome to Coaster Credit Counter</h1>
        <p>Log in to Search and Build a Bucket List of Your Favorite Roller Coasters</p>

        <button id="myBtn" onclick="myFunction()">Login</button> 
{/* 
        function onClick(myBtn)
         {this.props.history.push("/users/login" + id)} */}

      </div>

      <div className="home">

      </div>

    </div>
  );

}
export default Home;