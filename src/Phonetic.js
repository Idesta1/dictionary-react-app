import React from "react";
import "./Phonetic.css";


export default function Phonetic(props) {
    return(
        <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer" >
                <span role="img" aria-label="speaker" style={{ marginRight: "5px" }}>🔊</span>Listen</a>
     {props.phonetic.text} 
    </div>
     );
}