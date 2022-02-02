import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="row">
      <div style={{ color: "#EB4E3E", fontWeight: "bold" }}>sophia.</div>
      <div className="el">about</div>
      <div className="el">product</div>
      <div className="el">principles</div>
      <spacer></spacer>
      <button>download</button>
    </div>
  );
}
