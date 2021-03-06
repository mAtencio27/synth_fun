import React from "react";
//import * as Tone from "tone";

export default function KeyBoard(props){

    const keys = 
    <ul id="piano">
    <li data-note="C4" className="key">
        <div data-note="C#4" className="black-key">R</div>
        D
    </li>
    <li data-note="D4" className="key">
        <div data-note="D#4" className="black-key">T</div>
        F
    </li>
    <li data-note="E4" className="key">
        G
    </li>
    <li data-note="F4" className="key">
        <div data-note="F#4" className="black-key">U</div>
        H
    </li>
    <li data-note="G4" className="key">
        <div data-note="G#4" className="black-key">I</div>
        J
    </li>
    <li data-note="A4" className="key">
        <div data-note="A#4" className="black-key">O</div>
        K
    </li>
    <li data-note="B4" className="key">
        L
    </li>
    </ul>
    

    return <div className = "keyBoard">{keys}</div>;

}