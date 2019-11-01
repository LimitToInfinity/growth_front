import React, {Component} from 'react';
import Coberly from './coberly';
import kyle_headshot from "./../images/kyle_headshot.jpg";
import kyle_music from "./../images/kyle_music.jpg";
import kyle_paint from "./../images/kyle_paint.jpeg";
import kyle_sitting from "./../images/kyle_sitting.jpg";

export default class CoberlyContainer extends Component {

    imagesDictionary = {
        "1": kyle_headshot,
        "2": kyle_music,
        "3": kyle_paint,
        "4": kyle_sitting,
        "5": kyle_paint,
        "6": kyle_headshot,
        "7": kyle_paint,
        "8": kyle_sitting,
        "9": kyle_music,
    }

    imagesArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

    componentDidMount() {
        const allImages = document.querySelectorAll(".coberly");

        gameTime();

        function gameTime() {
            setInterval(displayImage, 500);
        }

        function displayImage() {
            const randomNumber = `${Math.floor(Math.random() * 9)}`;
            let previousRandomNumber = 9;

            if (randomNumber !== previousRandomNumber) {
                setTimeout(removeDisplay, 1000);
                const imageDiv = allImages[randomNumber];
                imageDiv.classList.add("open");
                
                previousRandomNumber = randomNumber

                function removeDisplay (){
                    imageDiv.classList.remove("open");
                }
            } else {
                displayImage();
            }
        }
    }

    componentWillUnmount() {
        return null
    }

    render(){
        const { points, seconds } = this.props
        const displayImages = () => {
            return this.imagesArray.map(number => {
                return <Coberly 
                    key={number}
                    id={number - 1}
                    image={this.imagesDictionary[`${number}`]}
                    addPoint={this.props.addPoint}
                />
            });
        }
    
        return (
            <div className="coberly-container">
                {displayImages()}
            </div>
        );
    }
}