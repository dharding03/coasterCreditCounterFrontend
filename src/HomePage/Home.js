import React from 'react';
import './Home.css';
<script>
  function myFunction() {
    document.body.style.backgroundColor = "lightblue"
  }
</script>

function Home() {

  return (
    

    <div>
      <div id="background-video">
    
        <video autoPlay muted loop id="background-Video">
          <source src="furyVideo.mp4" type="video/mp4" />
        </video>

      </div>

      <div class="content">
        <h1>Welcome to Coaster Credit Counter</h1>
        <p>Log in to Search and Build a Bucket List of Your Favorite Roller Coasters</p>
        
        <button id="myBtn" onclick="myFunction()">Pause</button>
      </div>

      <div className="home">
        
      </div>

    </div>
  );

}
export default Home;