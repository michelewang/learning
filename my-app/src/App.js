import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Projects.js'

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Michele Wang</h1>
          </header>
        </div>
        <div className="about">
          <p className="App-intro">
            <h3> About Me </h3>
            <p> Harvard College Class of 2021 </p>
            <p> Studying Applied Math with a focus in Computer Science </p>
            <p> michelewang@college.harvard.edu </p>
            <a href = 'https://github.com/michelewang' class = "trans">
            </a>
          </p>
        </div>

        <h2 className="heading" id="projects">PROJECTS</h2>
          <Projects />

      </div>
    );
  }
}

export default App;
