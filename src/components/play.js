import React from 'react';
import kyle_goober from "./../images/kyle_goober.jpg";

export default function Play(props) {
    
    return(
        <div className="play">
            <h3>Whack that Coberly!?!</h3>
            <img className="goober-coberly" alt="goober coberly" src={kyle_goober} />
            <button className="play-now" onClick={() => props.play()}>Play!</button>
        </div>
    );
} 