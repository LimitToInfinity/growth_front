import React from 'react';

export default function HeaderBar(props) {
    return(
        <header className="header-bar">
            <h1>Whack A Coberly</h1>
            <h2>Points: {props.points} / 10</h2>
            <h2>Seconds: {props.seconds} / 15</h2>
        </header>
    )
} 