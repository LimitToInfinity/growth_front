import React from 'react';

function CoberlyContainer() {

    const imagesDictionary = {
        "1": "./../../public/images/kyle_headshot",
        "2": "./../../public/images/kyle_music",
        "3": "./../../public/images/kyle_paint",
        "4": "./../../public/images/kyle_sitting",
        "5": "./../../public/images/kyle_paint",
        "6": "./../../public/images/kyle_music",
        "7": "./../../public/images/kyle_sitting",
        "8": "./../../public/images/kyle_paint",
        "9": "./../../public/images/kyle_headshot",
    }

    const imagesArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

    // imagesArray.map(number => {
        
    // })

    return (
    <div className="coberly-container">
        <div className="coberly-image">
            <img alt="coberly" src="" />
        </div>
    </div>
    );
}

export default CoberlyContainer;
