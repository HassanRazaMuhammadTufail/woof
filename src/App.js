import React from "react";
import "./App.css";
import SiderDemo from "./Components/Layout";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <SiderDemo /> */}
        <h1>Hello Home</h1>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello World Ahsan Ahmed
          </a>
        </header>

      </div>
    );
  }
}

export default App;
