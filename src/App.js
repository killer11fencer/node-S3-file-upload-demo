import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: {}
    };
  }
  handleClick = e => {
    e.preventDefault();

    let data = new FormData();
    data.append("file", this.state.file);

    axios
      .post("/api/uploadToS3", data)
      .then(response => alert("file uploaded!"))
      .catch(console.log);
  };

  handleChange = e => {
    e.preventDefault();

    this.setState({ file: e.target.files[0] });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form>
          <input onChange={e => this.handleChange(e)} type="file" />
          <button onClick={e => this.handleClick(e)} type="submit">
            UPLOAD FILE
          </button>
        </form>
      </div>
    );
  }
}

export default App;
