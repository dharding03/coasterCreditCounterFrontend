import React from 'react';
import './Home.css';
import ReactPlayer from 'react-player';

<script>
  function myFunction() {
    document.body.style.backgroundColor = "lightblue"
  }
</script>

function Home() {

  return (
    <div className="home">
      <h1>Welcome to Coaster Credit Counter</h1>
      <p>Log in to Search and Build a Bucket List of Your Favorite Roller Coasters</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/bCHM41ZdTzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

  );

}
export default Home;