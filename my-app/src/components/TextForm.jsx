import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLoClick = () => {
    console.log("lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClClick = () => {
    console.log("Cleartext was clicked");
    setText("");
    props.showAlert("ClearText", "success");
  };
  const handleCoClick = () => {
    console.log("Copytext was clicked");
    navigator.clipboard.writeText(text);
    props.showAlert("copied", "success");
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter the text");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#0a0830" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "#0a0830",
            }}
            id="MyBox"
            rows="8"
          />
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCoClick}>
          Copy Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length
          }
          Words and {text.length}Characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length}minutes read</p>
      </div>
    </>
  );
}
