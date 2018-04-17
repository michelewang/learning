import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="about">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tim Tamm</h1>
        </header>
        <p className="App-intro">
          <h3> About Me </h3>
          <p> Harvard College Class of 2018 </p>
          <p> Studying Applied Math with a focus in Computer Science </p>
          <p> michelewang@college.harvard.edu </p>
          <a href = 'https://github.com/michelewang' class = "trans">
            <img src = "github.jpg"></img>
          </a>
        </p>
      </div>

    );
  }
}

export default App;
