import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("hui");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleloClick = () => {
    // console.log("hui");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    var t = document.getElementById("mybox");
    t.select();
    navigator.clipboard.writeText(t.value);
    props.showAlert("Copied to clipboard", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "success");
    
  }

  const handleOnChange = (event) => {
    // console.log("mui");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setText("Temp text");
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3 mr-6">
          <textarea
            className="form-control text-info"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'#042743'}}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <div className="mb-3" ></div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleloClick}>
          Convert To LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
      <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h3>Your Text Summary</h3>
        <p>
        {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>
          <b>Time to read:</b> {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes
        </p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
