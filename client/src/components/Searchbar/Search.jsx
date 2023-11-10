/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import searchNews from "../../../utils/API";

const Search = ({ handleSearchInput }) => {
  const [searchInput, setSearchInput] = useState("");

  const onFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await searchNews(searchInput);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      const { articles } = await response.json();

      handleSearchInput(articles);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setSearchInput("");
    }
  };

  return (
    <div style={{ padding: "1em" }}>
      <div
        class="ui" style={{ backgroundColor: "#3D3D3D", color: "white", padding: "1em" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form onSubmit={onFormSubmit}>
            <input
              style={{ borderRadius: ".5em" }}
              placeholder="Search for news"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            ></input>
            <button
              style={{ backgroundColor: "white", borderRadius: ".5em" }}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
