import React from "react";
import "./ImageLinkForm.css"

export default function ImageLinkForm() {
    return (
        <div>
            <p className="f3 center">
                {"This Magic Brain will detect faces in your pictures! Give it a try. ~"}
            </p>
            <div className="center form">
                <div className="center pa4 br3 shadow-5" >
                    <input className="f4 pa2 w-80 center" type="text" />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer">Detect</button>
                </div>
            </div>
        </div>
    )
}