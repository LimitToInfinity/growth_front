import React, { Component } from 'react';
import './../stylesheets/App.css';
import CoberlyContainer from "./coberlycontainer"
import HeaderBar from "./headerbar"
import YouWin from "./youwin"

export default class App extends Component {
  state = {
    points: 0,
  }

  addPoint = () => {
    this.setState({ points: this.state.points + 1 })
  }

  playAgain = () => {
    this.setState( { points: 0 })
  }

  render() {
    return (
      <div className="app">
        <HeaderBar points={this.state.points} seconds={this.state.seconds}/>
        {this.state.points < 10 
          ? <CoberlyContainer 
              points={this.state.points}
              addPoint={this.addPoint}
            />
          : <YouWin 
              playAgain={this.playAgain}
            />
        }
      </div>
    );
  }
}
