import React from 'react';
import game_over from "./../images/game_over.jpg";

export default function YouLose(props) {
    
    return(
        <div className="you-lose">
            <h3>You Whiffed that Coberly!</h3>
            <img className="game_over" alt="game_over" src={game_over} />
            <button className="play-again" onClick={() => props.play()}>Redeem Yourself!</button>
        </div>
    );
} 