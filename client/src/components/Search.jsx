/* eslint-disable no-unused-vars */
import React from "react";

const Search = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#4D4D4D", color: "white", padding: "1em" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            style={{ borderRadius: ".5em", width: "40em" }}
            placeholder="Search for news"
          ></input>
          <button style={{ backgroundColor: "white", borderRadius: ".5em" }}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
