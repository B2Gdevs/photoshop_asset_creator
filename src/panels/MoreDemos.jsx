import React, { useRef, useState } from "react";
import { PlayIcon } from "../components/Icons.jsx";
const photoshop = require("photoshop")

var createNewLayersAction = [
  {
    "_obj": "make",
    "_target": [{ "_ref": "layer" }],
    "layerID": 3,
    "using": { "_obj": "layer", "name": "GeneratedLayer" }
  }
]

function createNewLayerAction(layerId){
    [
        {
          "_obj": "make",
          "_target": [{ "_ref": "layer" }],
          "layerID": photoshop.app.activeDocument.layers.length + 1,
          "using": { "_obj": "layer", "name": "GeneratedLayer" }
        }
      ]
}


export const MoreDemos = () => {
    const myStyle = {
        marginTop: "50"
    }
    var promptRef = useRef()
    var [prompText, SetPromptText] = useState("")
    function GenerateDetailsHandler(){
        photoshop.action.batchPlay(createNewLayerAction())
        console.log("yolo")
        // app.activeDocument.createLayer({"name": "Generated Layer"})
    }
    return (
        <>
        <div>
            <sp-textfield ref={promptRef} onInput={(event) => SetPromptText(event.target.value)} placeholder="Some anime art">
            <sp-label isrequired="true" slot="label">Prompt</sp-label>
            </sp-textfield>
            </div>
            <sp-button onClick={GenerateDetailsHandler} variant="cta" style={myStyle}>
                <span>Generate Details</span><span slot="icon"><PlayIcon /></span>
            </sp-button>
            <div>{prompText}</div>
            {/* <div>{promptRef && promptRef.current.value}</div> */}
        </>
    );
    }
