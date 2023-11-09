/* eslint-disable no-unused-vars */
import React from "react";

const Signup = () => {
  return (
    <div
      style={{
        border: "solid 1px black",
        borderRadius: ".5em",
        padding: "1em",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <h4>Username</h4>
      <input style={{ borderRadius: ".5em", width: "75%" }}></input>
      <h4>Password</h4>
      <input style={{ borderRadius: ".5em", width: "75%" }}></input>
      <button
        style={{
          backgroundColor: "#4D4D4D",
          color: "white",
          borderRadius: ".5em",
          marginTop: "1em",
        }}
      >
        Create Account
      </button>
    </div>
  );
};

export default Signup;
