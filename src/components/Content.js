import React from "react";
import "./Content.css";
import { Blob } from "react-blob";

export default function Content() {
  return (
    <div id="content">
      <h1 style={{ marginRight: "20%" }}>
        <i>Meet Sophia,</i>
      </h1>
      <div id="blob-container">
        <center>
          <Blob
            id="blob"
            animationDuration="60s"
            size="30vh"
            style={{
              background: "black",
              color: "white",
            }}
          >
            <img id="blob-image" src={require("../assets/gradient.png")}></img>
          </Blob>
        </center>
      </div>
      <h1 style={{ marginLeft: "20%" }}>your second brain.</h1>
    </div>
  );
}
