import React, { Component } from 'react';

export default class Coberly extends Component {
    
    render() {
        const { addPoint, id, image } = this.props;
        
        const handleClick = () => {
            const coberly = document.getElementById(`${id}`);
            coberly.classList.remove("open")

            addPoint();
        }
        
        return(
            <div id={id} onClick={handleClick} className="coberly">
                <img alt="coberly" src={image} />
            </div>
        );
    }
}