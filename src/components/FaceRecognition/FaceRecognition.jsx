import React from "react";
import "./FaceRecognition.css"

export default function FaceRecognition({imgInput, box}) {

    return (
        <div className="center ma">
            <div className="absolute mt2">
                {imgInput? <img id="inputimage" src={imgInput} alt="Hello My Friend" width="500px" height="auto" /> : null}
                <div className="bounding-box" style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}></div>
            </div>
        </div>
    )
} 