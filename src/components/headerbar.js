import React from 'react';

export default function HeaderBar(props) {
    return(
        <header className="header-bar">
            <h1>Whack A Coberly</h1>
            <h2>Points: {props.points}</h2>
        </header>
    )
} 