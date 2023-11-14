/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SavedResults = (props) => {
  return (
    <div
      className="news-card"
      style={{
        border: "solid 1px black",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: ".5em",
        padding: "1em 1em 2em",
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginTop: "5rem" }}>{props.title}</h2>
      <img
        style={{
          border: "solid 1px black",
          width: "80%",
          maxHeight: "250px",
          minHeight: "250px",
          objectFit: "cover",
        }}
        src={`${props.imageUrl}`}
        alt="News Image"
      />
      <p>{props.description}</p>
      <a
        href={props.link}
        className="ui button"
        style={{
          width: "40%",
          backgroundColor: "#4D4D4D",
          color: "white",
          margin: "2.5em auto 0",
        }}
        target="_blank"
        rel="noreferrer"
      >
        View Full Article
      </a>
    </div>
  );
};

export default SavedResults;
