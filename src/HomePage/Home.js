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

        <video autoPlay muted loop id="myVideo">
          <source src="furyVideo.mp4" type="video/mp4" />
        </video>

      </div>

      <div class="content">
        <h1>Welcome to Coaster Credit Counter</h1>
        <p>Log in to Search and Build a Bucket List of Your Favorite Roller Coasters</p>

        <button id="myBtn" onclick="myFunction()">Pause</button>
      </div>

      <div className="home">
        

        [<iframe width="560" height="315"
          src="https://www.youtube.com/embed/bCHM41ZdTzQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>,

        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/jEApKbnF4YE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>,

        <iframe width="560" height="315" src="https://www.youtube.com/embed/-fg-YfFiJ5c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>

        ]
      </div>

    </div>
  );

}
export default Home;