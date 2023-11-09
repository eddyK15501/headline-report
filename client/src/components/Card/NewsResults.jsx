/* eslint-disable no-unused-vars */
import React from "react";

const NewsResults = () => {
  return (
    <div
      style={{
        border: "solid 1px black",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: ".5em",
        padding: "1em",
        width: "30%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="bookmark-star"
        style={{ position: "absolute", top: 6, right: 6, fontSize: "2em" }}
      >
        &#9734;
      </div>
      <h2>Example Title</h2>
      <img
        style={{ border: "solid 1px black", width: "80%", height: "auto" }}
        src=""
        alt="News Image"
      />
      <p style={{ textAlign: "center" }}>
        reruihrehfiofhieowhfieowhfuiogwheufgiowehifwejifhfwehiofghwe
        fewhwuuofhweiofhweifhwefewfwefgergrgthjyj6thtwhtrrthwhtrew
        fwnewjofnwekfgnewjkofgnekwngfejwngkejwowngkewlngegnekwng
      </p>
      <button
        style={{
          backgroundColor: "#4D4D4D",
          color: "white",
          borderRadius: ".5em",
          marginTop: "1em",
        }}
      >
        View Full Article
      </button>
    </div>
  );
};

export default NewsResults;
