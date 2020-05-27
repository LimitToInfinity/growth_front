import React, {Component} from 'react';

import Coberly from './coberly';

import kyle_headshot from "./../images/kyle_headshot.jpg";
import kyle_music from "./../images/kyle_music.jpg";
import kyle_paint from "./../images/kyle_paint.jpeg";
import kyle_sitting from "./../images/kyle_sitting.jpg";

export default class CoberlyContainer extends Component {

    state = {
        randomNumber: -1,
        allImages: [],
        interval: null
    }

    imagesDictionary = {
        "0": kyle_headshot,
        "1": kyle_music,
        "2": kyle_paint,
        "3": kyle_sitting,
        "4": kyle_paint,
        "5": kyle_headshot,
        "6": kyle_paint,
        "7": kyle_sitting,
        "8": kyle_music,
    };

    componentDidMount() {
        this.setState({
            allImages: document.querySelectorAll(".coberly"),
            interval: setInterval(this.setImage, 500)
        });
    }

    componentWillUnmount() {
        clearInterval( this.state.interval );
    }
    
    setImage = () => {
        const { randomNumber } = this.state;
        const newRandomNumber = `${ Math.floor( Math.random() * 9 ) }`;
        
        if (newRandomNumber !== randomNumber) {
            this.displayImage(newRandomNumber);
        } else {
            this.setImage();
        }
    }

    displayImage = (newRandomNumber) => {
        const { allImages } = this.state;
        this.setState({ randomNumber: newRandomNumber });
        
        const imageDiv = allImages[newRandomNumber];
        imageDiv.classList.add("open");
        setTimeout(() => this.removeDisplay(imageDiv), 1000);
    }

    removeDisplay = (imageDiv) => {
        imageDiv.classList.remove("open");
    }

    displayImages = () => {
        const { addPoint } = this.props;
        const { imagesDictionary } = this;
        
        return Object.keys(imagesDictionary).map(number => {
            return <Coberly 
                key={ number }
                id={ number }
                image={ imagesDictionary[`${number}`] }
                addPoint={ addPoint }
            />
        });
    }

    render(){
        return (
            <div className="wrapper">
                <div className="coberly-container">
                    { this.displayImages() }
                </div>
            </div>
        );
    }
}