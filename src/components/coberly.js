import React from 'react';

export default function Coberly({ id, image, addPoint }) {
    
    const coberly = document.getElementById(`${id}`);
    
    const handleClick = () => {
        coberly.classList.remove("open");
        addPoint();
    }
    
    return (
        <div id={id} onClick={handleClick} className="coberly">
            <img alt="random-coberly" src={image} />
        </div>
    );
}