import React from 'react';

export default function Coberly(props) {

    const { id, addPoint } = props

    const handleClick = (event) => {
        addPoint()
    }

    return(
        <div className="coberly-div">
            <div id={id} onClick={handleClick} className="coberly">
                <img alt="coberly" src={props.image} />
            </div>
        </div>
    )
}