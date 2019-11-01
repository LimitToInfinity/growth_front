import React, { Component } from 'react';
import game_over from "./../images/game_over.jpg";

export default class YouLose extends Component {
    
    constructor(props){
        super(props);
    }
    stop = () => {
        this.props.stopTimer()
      }
    
    render(){
        const {seconds, points } = this.props
        if(seconds >= 1 && points < 10) { 
            this.stop()
            return(
                <div className="you-lose">
                    <h3>You Whiffed that Coberly!</h3>
                    <img className="game_over" alt="game_over" src={game_over} />
                    <button className="play-again" onClick={() => this.props.play()}>Redeem Yourself!</button>
                </div>
            );
        }else{
            return null;
        }

   }
    
} 