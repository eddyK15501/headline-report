/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import searchNews from "../../utils/API";

const Search = ({ handleSearchInput }) => {
  const [searchInput, setSearchInput] = useState("tech");

  const fetchData = async (input) => {
    try {
      const response = await searchNews(input);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const { articles } = await response.json();

      const newsData = articles.map((news) => ({
        newsId: news.url,
        title: news.title,
        description: news.description,
        imageUrl:
          news.urlToImage ||
          "https://resources.alleghenycounty.us/css/images/Default_No_Image_Available.png",
        link: news.url,
      }));

      handleSearchInput(newsData);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setSearchInput('')
    }
  };

  // useEffect(() => {
  //   fetchData(searchInput);
  // }, []);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    fetchData(searchInput);
  };

  return (
    <div style={{ padding: "1em" }}>
      <div
        className="ui" style={{ backgroundColor: "#3D3D3D", color: "white", padding: "1em" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form style={{ width: '25%', display: 'flex', gap: '0.5rem'}} onSubmit={onFormSubmit}>
            <input
              style={{ borderRadius: ".5em", outline: "none", minWidth: '95%', fontSize: '1.2rem', padding: '0.4rem 0 0.3rem 0.3rem' }}
              placeholder="Search for news"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            ></input>
            <button
              style={{ backgroundColor: "white", borderRadius: ".5em", fontSize: '1.1rem', cursor: 'pointer' }}
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
