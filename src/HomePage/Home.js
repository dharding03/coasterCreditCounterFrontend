import React from 'react';
import './Home.css';
<script>
  function myFunction() {
    document.body.style.backgroundColor = "lightblue"
  }
</script>

function Home() {

  return (


    <div className="myVideo">

      <iframe src="https://player.vimeo.com/video/572707120?autoplay=1&loop=1"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen></iframe>

      {/* <iframe width="560" height="315"
        src="https://www.youtube.com/embed/csdM-VHb6Xg?controls=0&autoplay=1&modestbranding&loop=1"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; modestbranding; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe> */}

      {/* <video autoPlay muted loop id="background-Video">
          <source src="https://www.youtube.com/embed/csdM-VHb6Xg?autoplay=1" />
        </video> */}



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