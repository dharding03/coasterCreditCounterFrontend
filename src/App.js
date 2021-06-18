import React from 'react';
import './App.css';
import "../src/slideshow/style.css";
import "../src/slideshow/controls.js"
import Slideshow from './slideshow/controls.js';
import Login from './Login/components/loginForm';
import RegistrationForm from './Login/components/registrationForm';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';






function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <RegistrationForm /> */}
        <Slideshow />
        <Login />

            


      </header>
      
        <Router> 
          <Switch>
            <Route path="/register" component={RegistrationForm}/>
          </Switch>
        </Router>
        
    </div>
  );
}

export default App;