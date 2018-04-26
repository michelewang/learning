import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';
import CustomModal from './CustomModal';
import spotify from './spotify.png'
import berg from './berg.jpg'

  class Tile extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
          name: this.props.name,
          image: this.props.image,
          description: this.props.description,
          languages: this.props.languages
        }
    }
    onOpenModal() {
        this.setState({open: this.props.openModal});
    }
    onCloseModal()
    {
        this.setState({open:false});
    }
    render ()
    {
      return (
        <CustomModal title={this.props.title}
                     description={this.props.description}
                     languages={this.props.languages}/>

      );
    }
  }

  // class Modal extends React.Component {

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
          <p> Studying Applied Math with a focus in Computer Science </p>
          <p> michelewang@college.harvard.edu </p>
          <a href = 'https://github.com/michelewang' class = "trans">
          </a>
        </p>
        <div className='flex-container'>
          <Tile title="Berg Buddies"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                languages="language 1, language 2" />
          <Tile title="Spotify Classifier"
                description="whose manzzza"
                languages="language 1, language 2" />
          <Tile title="OCaml Interpreter"
                description="whose manzzza"
                languages="language 1, language 2" />
        </div>
      </div>
    );
  }
}

export default App;
