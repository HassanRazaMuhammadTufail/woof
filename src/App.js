import React from "react";
import "./App.css";
import SiderDemo from "./Screens/Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SiderDemo getpropsFromHistory={this.props.history} />
      </div>
    );
  }
}

export default App;
