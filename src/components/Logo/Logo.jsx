import React from "react";
import Tilt from 'react-parallax-tilt';
import "./Logo.css"
import img from "./Banana.gif"


export default function Logo() {
    return (
        <div className="ma4 mt0">
            <Tilt     
            className="parallax-effect tc"
            perspective={1000}>
                <div className="inner-element">
                    <img src={img} alt="Brain Icon from icons8" />
                </div>
            </Tilt>
        </div>
    )
}