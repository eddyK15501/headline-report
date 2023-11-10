/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const NewsResults = ({ newsId, title, description, link, imageUrl }) => {
  return (
    <div
      className="news-card"
      style={{
        border: "solid 1px black",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: ".5em",
        padding: "1em",
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
      <div
        className="bookmark-star"
        style={{ position: "absolute", top: 6, right: 6, fontSize: "2em" }}
      >
        &#9734;
      </div>
      <h2>{title}</h2>
      <img
        style={{
          border: "solid 1px black",
          width: "80%",
          maxHeight: "250px",
          minHeight: "250px",
          objectFit: "cover",
        }}
        src={`${imageUrl}`}
        alt="News Image"
      />
      <p>{description}</p>
      <a
        href={link}
        style={{
          backgroundColor: "#4D4D4D",
          color: "white",
          borderRadius: ".5em",
          marginTop: "1em",
          display: "inline-block",
          padding: ".5em 1em",
          textDecoration: "none",
          cursor: "pointer",
        }}
        target="_blank"
        rel="noreferrer"
      >
        View Full Article
      </a>
    </div>
  );
};

export default NewsResults;
