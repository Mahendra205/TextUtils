import React, { useState } from "react";

export default function TextForm(props) {
  //convert to upperCase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase", "success");
  };
  //convert to lowerCase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", "success");
  };
  //clear the text
  const handleOnClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };
  //Invers text
  const handleinverseclick = () => {
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    props.showAlert("Invers text", "success");
  };
  //for listen the text
  const [btnText, setBtnText] = useState("Listen");
  const speak = () => {
    if (btnText === "Listen") {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      setBtnText("Stop Listening");
      msg.onend = () => {
        setBtnText("Listen");
      };
    } else {
      window.speechSynthesis.cancel();
      setBtnText("Listen");
    }
  };
  //convert to capitalize each word
  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert("Capitale each word", "success");
  };
  //remove extra spaces

  // const WhiteSpace = () => {
  //   let updated_text = text.replace(/\s+/g, ' ').trim();
  //   setText(updated_text);
  //   }

  //for removing extra space this code is much more efficient.
  const WhiteSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("White space removed", "success");
  };

  //for copy the entier text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("text copied", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-2">{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          />
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleOnClear}
        >
          Clear Teaxt
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleinverseclick}
        >
          Invers Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={speak}
        >
          {btnText}
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCapitalize}
        >
          Capitalize Each Word
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={WhiteSpace}
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>

      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
      </div>
    </>
  );
}
