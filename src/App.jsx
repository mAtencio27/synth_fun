
import './App.css';
import * as Tone from "tone";
import KeyBoard from './components/keyboard.jsx';
import Controls from './components/controls.jsx';
import { useEffect } from 'react';
import {useState } from 'react';

function App() {

//envelope state

const [attack, setAttack] = useState(.5)

//document.getElementById("attack").value

const attackChange = (value) => {
  setAttack(value)
}

//Grab the piano and add event listener *******************************************************************
//create synth 
useEffect(() => {
  
  const synth = new Tone.MonoSynth({
    oscillator: {
      type: "square"
    },
    envelope: {
      attack: attack,
      decay: 5,
      release: .5,
      sustain: .5
    }
    
  }).toMaster();

  // Listening to the events from keyboard
  window.addEventListener("mousedown", e => {
    // triggers note value from data note
    synth.triggerAttack(e.target.dataset.note);
  });
  
  window.addEventListener("mouseup", e => {
    // releases note
    synth.triggerRelease();
  });

  window.addEventListener("keydown", e => {
    // e object has the key to access note value
    const keyNote = {d:"C4",r:"C#4",f:"D4",t:"D#4",g:"E4",h:"F4",u:"f#4",j:"G4",i:"G#4",k:"A4",o:"A#4",l:"B4"}
    return synth.triggerAttackRelease(keyNote[e.key],"16n")
  });

  // window.addEventListener("keyup", e => {
  //   // e object has the key to access note value
  //   //const keyNote = {d:"C4",r:"C#4",f:"D4",t:"D#4",g:"E4",h:"F4",u:"f#4",j:"G4",i:"G#4",k:"A4",o:"A#4",l:"B4"}
  //   return synth.triggerRelease(e)
  // });

}, []);


  return (
    <div className="View">
      <h1 className="Header">Synth</h1>
      <div className="App">
        <div className="synth">
          <Controls setAttack={attackChange}/>
          <KeyBoard/>
        </div>
      </div>
    </div>
  );
}

export default App;
