import React from 'react';

import game_over from "./../images/game_over.jpg";

export default function YouLose({ play, stopTimer }) {
    
    stopTimer();
    
    return(
        <div className="you-lose">
            <h3>You Whiffed that Coberly!</h3>
            <img className="game-over" alt="game-over" src={game_over} />
            <button className="play-again" onClick={play}>Redeem Yourself!</button>
        </div>
    );
} 