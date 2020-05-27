import React from 'react';

export default function HeaderBar({ points, seconds }) {
    return(
        <header className="header-bar">
            <h1>Whack A Coberly</h1>
            <h2>Points: { points } / 10</h2>
            <h2>Seconds: { seconds } / 15</h2>
        </header>
    )
} 