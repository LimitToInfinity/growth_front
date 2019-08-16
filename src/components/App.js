import React, {Component} from 'react';
import './../stylesheets/App.css';
import CoberlyContainer from "./coberlycontainer"
import HeaderBar from "./headerbar"
import YouWin from "./youwin"

class App extends Component {
  state = {
    points: 0,
  }

  // checkStatus = () => {
  //   if (this.state.points === 10) {
  //     console.log("you win")
  //   }
  // }

  addPoint = () => {
    this.setState({ points: this.state.points + 1})
  }

  render() {

    // this.checkStatus()

    return (
      <div className="app">
        <HeaderBar points={this.state.points} seconds={this.state.seconds}/>
        {this.state.points === 10 ? <YouWin /> : null}
        <CoberlyContainer 
          points={this.state.points}
          addPoint={this.addPoint}
        />
      </div>
    );
  }
}

export default App;
