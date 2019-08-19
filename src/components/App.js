import React, { Component } from 'react';
import './../stylesheets/App.css';
import CoberlyContainer from "./coberlycontainer";
import HeaderBar from "./headerbar";
import YouWin from "./youwin";
import YouLose from "./youlose";
import Play from "./play";

export default class App extends Component {
  state = {
    points: 0,
    seconds: -1,
  }

  addPoint = () => {
    this.setState({ points: this.state.points + 1 });
  }

  play = () => {
    this.setState({ points: 0 });
    this.startTimer();
  }

  interval = null
  startTimer = () => {
    this.setState({ seconds: 0, });
    const addSecond = () => this.setState({ seconds: this.state.seconds + 1 });
    this.interval = setInterval(addSecond, 1000);
  }

  stopTimer = () => {
    clearInterval(this.interval);
  }

  render() {
    const { points, seconds } = this.state;

    if (seconds === -1) {
      return (
        <div className="app">
          <HeaderBar points={points} seconds={0} />
          <Play play={this.play} />
        </div>
      );
    } else if (seconds >= 10 && points < 10) {
      this.stopTimer();
      return (
        <div className="app">
          <HeaderBar points={points} seconds={seconds} />
          <YouLose play={this.play} />
        </div>
      );
    } else if (seconds > -1 && points < 10) {
      return (
        <div className="app">
          <HeaderBar points={points} seconds={seconds}/>
          <CoberlyContainer points={points} addPoint={this.addPoint} />
        </div>
      );
    } else if (seconds < 10 && points >= 10) {
      this.stopTimer();
      return (
        <div className="app">
          <HeaderBar points={points} seconds={seconds}/>
          <YouWin play={this.play} />
        </div>
      );
    }
  }
}
