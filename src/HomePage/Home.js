import React from 'react';
import './Home.css';
import LoginForm from '../Login/components/loginForm';
<script>
  function myFunction() {
    document.body.style.backgroundColor = "lightblue"
  }
</script>

function Home() {

  return (


    <div>

    <video autoPlay mute loop>
      <source src="MyMovie.mp4" type="video/mp4" />
    </video>



      <div class="content">
        <h1>Welcome to Coaster Credit Counter</h1>
        <p>Log in to build your credits list and Bucket List of coasters you want to ride.</p>
        
        <button id="myBtn" onclick="myFunction()">Pause</button>
      </div>

      <div className="home">

      </div>

    </div>
  );

}
export default Home;