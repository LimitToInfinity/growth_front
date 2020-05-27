import React, { Component } from 'react';

import HeaderBar from "./headerbar";
import Main from "./main";

import './../stylesheets/App.css';

export default class App extends Component {
  state = {
    points: 0,
    seconds: 15,
    playing: false,
    timer: null
  };

  play = () => {
    this.setState({ points: 0, seconds: 15, playing: true });
    this.startTimer();
  }

  startTimer = () => {
    this.setState({ timer: setInterval( this.countdown, 1000 ) });
  }

  countdown = () => {
    this.setState({ seconds: this.state.seconds - 1 });
  }

  stopGame = () => {
    this.setState({ playing: false });
    clearInterval( this.state.timer );
  }

  addPoint = () => {
    this.setState({ points: this.state.points + 1 });
  }

  render() {
    const { points, seconds, playing } = this.state;
    
    return (
      <div className="app">
        <HeaderBar seconds={ seconds } points={ points } />
        
        <Main
          seconds={ seconds }
          points={ points }
          playing={ playing }
          play={ this.play }
          stopGame={ this.stopGame }
          addPoint={ this.addPoint }
        />
      </div>
    );
  }
}
