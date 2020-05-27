import React from "react";

import Play from "./play";
import YouLose from "./youlose";
import YouWin from "./youwin";
import CoberlyContainer from "./coberlycontainer";

export default function Main(props) {
    const { seconds, points, playing, play, stopGame, addPoint } = props;
    
    if (seconds === 0) {
        stopGameCheck();
        return <YouLose play={ play } />;
    } else if (points === 10) {
        stopGameCheck();
        return <YouWin play={ play } />;
    } else if (playing) {
        return <CoberlyContainer addPoint={ addPoint } />;
    } else {
        return <Play play={ play } />;
    }

    function stopGameCheck() {
        if (playing) { stopGame(); }
    }
}