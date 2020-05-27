import React from "react";

import Play from "./play";
import YouLose from "./youlose";
import YouWin from "./youwin";
import CoberlyContainer from "./coberlycontainer";

export default function Main(props) {
    const { seconds, points, play, stopTimer, addPoint } = props;
    
    if (seconds === 16) {
        return <Play play={ play } />;
    } else if (seconds === 1) {
        return <YouLose play={ play } stopTimer={ stopTimer } />;
    } else if (points === 10) {
        return <YouWin play={ play } stopTimer={ stopTimer } />;
    } else if (seconds < 16 && seconds > 1) {
        return <CoberlyContainer addPoint={ addPoint } />;
    } else {
        return null;
    }
}