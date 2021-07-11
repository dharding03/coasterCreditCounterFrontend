import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

<script>
  function myFunction() {
    document.body.style.backgroundColor = "lightblue"
  }
</script>

function  Home() {

  return (
    <div>
      
      <iframe src="https://player.vimeo.com/video/572707120?autoplay=1&loop=1" 
      width="1980" 
      height="900" 
      frameborder="0" 
      allow="autoplay; fullscreen; picture-in-picture" 
      allowfullscreen></iframe>

      <div class="content">
        <h1>Welcome to Coaster Credit Counter</h1>
        <p>Join your fellow coaster enthusiasts and keep track of your credits and bucket list.</p>
        <Link to="/login">
          <button type="button" className="loginButton">Click here to log in</button>
        </Link>
      </div>
      <div className="home">
      </div>
    </div>
  );

}
export default Home;