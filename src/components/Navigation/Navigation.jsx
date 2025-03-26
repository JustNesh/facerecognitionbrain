import React from "react";
import "./Navigation.css";

export default function Navigation({onRouteChange,isSignedIn}) {
    return (
        isSignedIn ? 
        <nav style={{display: "flex", justifyContent: "flex-end"}}>
            <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('signInPage')}>Sign Out</p>
        </nav>
        :
        <nav style={{display: "flex", justifyContent: "flex-end"}}>
            <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('signInPage')}>Sign In</p>
            <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('registerPage')}>Register</p>
        </nav>
    )
}