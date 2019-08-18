import React from 'react';
import kyle_goofball from "./../images/kyle_goofball.png";

export default function YouWin(props) {
    
    const kyleGoofball = `${kyle_goofball}`

    return(
        <div className="you-win">
            <h1>You Whacked that Coberly!!!</h1>
            <img alt="goofball coberly" src={kyleGoofball} />
            <button onClick={() => props.playAgain()}>Play Again! </button>
        </div>
    )
} 