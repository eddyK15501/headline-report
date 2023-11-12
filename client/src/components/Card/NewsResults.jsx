/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

const NewsResults = ({ newsId, title, description, link, imageUrl }) => {
  const [clickBookmark, setClickBookmark] = useState("false");

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
      <div
        className="bookmark-icons"
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          fontSize: "2em",
          cursor: "pointer",
        }}
        onClick={() => setClickBookmark((prev) => !prev)}
      >
        {clickBookmark ? (
          <BsBookmarkCheck className="bs-icon" />
        ) : (
          <BsBookmarkCheckFill className="bs-icon" />
        )}
      </div>

      <h2 style={{ marginTop: "5rem" }}>{title}</h2>
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

export default NewsResults;
