import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="about">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Michele Wang</h1>
        </header>
        <p className="App-intro">
          <h3> About Me </h3>
          <p> Harvard College Class of 2021 </p>
          <p> Studying Applied Math ith a focus in Computer Science </p>
          <p> michelewang@college.harvard.edu </p>
        </p>
      </div>
    );
  }
}

export default App;
