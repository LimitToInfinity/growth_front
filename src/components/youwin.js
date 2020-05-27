import React from 'react';
import kyle_goofball from "./../images/kyle_goofball.png";

export default function YouWin({ play, stopTimer }) {
        
    stopTimer();

    return(
        <div className="you-win">
            <h3>You Whacked that Coberly!!!</h3>
            <img className="goofball-coberly" alt="goofball-coberly" src={kyle_goofball} />
            <button className="play-again" onClick={play}>Play Again!</button>
        </div>
    );
} 