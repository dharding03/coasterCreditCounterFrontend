import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./Banshee.JPG" className="App-logo" alt="logo" />
        <form>
          <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"></input>
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="text" id="password" name="password"></input>
          </div>
          <div>
            <input type="submit" id="login"  value= "Login" name="login"></input>
          </div>
        </form> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

