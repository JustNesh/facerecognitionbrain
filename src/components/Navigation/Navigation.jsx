import React from "react";
import "./Navigation.css";

export default function Navigation() {
    return (
        <nav style={{display: "flex", justifyContent: "flex-end"}}>
            <p className="f3 link dim black underline pa3 pointer">Sign Out</p>
        </nav>
    )
}