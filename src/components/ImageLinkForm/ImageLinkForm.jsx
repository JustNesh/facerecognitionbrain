import React from "react";
import "./ImageLinkForm.css"

export default function ImageLinkForm({onInputChange,onSubmit}) {
    
    return (
        <div>
            <p className="f3 center">
                {"This Magic Brain will detect faces in your pictures! Give it a try. ~"}
            </p>
            <div className="center form">
                <div className="inner-form-container flex pa4 br3 shadow-5" >
                    <input onChange={onInputChange} id="detect-input" className="f4 pa2 center" type="text" />
                    <button id="detect-button" className="grow f4 link ph3 pv2 dib white bg-light-purple pointer" onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}