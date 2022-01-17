import React from "react";
import { Envelope } from "tone";
//import * as Tone from "tone";

export default function Controls(props){
    // const Volume = 
    // <form>
    //     <label for="vol">Volume (between 0 and 50):</label>
    //     <input type="range" id="vol" name="vol" min="0" max="50"></input>
    // </form>

    const envelope = 
        <div className="Envelope">
            <form>
                <label for="attack">Attack  :</label>
                <input type="range" id="attack" name="attack" min="0" max="20"></input>
            </form>
            <form>
                <label for="Decay">Decay   :</label>
                <input type="range" id="decay" name="decay" min="0" max="10"></input>
            </form>
            <form>
                <label for="Release">Release :</label>
                <input type="range" id="release" name="release" min="0" max="10"></input>
            </form>
            <form>
                <label for="Sustain">Sustain :</label>
                <input type="range" id="sustain" name="sustain" min="0" max="10"></input>
            </form>
        </div>

    return <div className="Panel">{envelope}</div>;

};