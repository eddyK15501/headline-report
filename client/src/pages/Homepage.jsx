/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import Search from "../components/Searchbar/Search";
import NewsResults from "../components/Card/NewsResults";

import { saveNewsIds, getSavedNewsIds } from "../../utils/localStorage";

const Homepage = () => {
  const [searchedNews, setSearchedNews] = useState([]);
  const [storagedNews, setStoragedNews] = useState(getSavedNewsIds);

  useEffect(() => {
    return () => saveNewsIds(storagedNews);
  });

  const handleSearchInput = (search) => {
    setSearchedNews(search);
    console.log(search);
  };

  return (
    <div style={{ margin: "1em", paddingBottom: "3.5rem" }}>
      <Search handleSearchInput={handleSearchInput} />

      <div
        style={{
          marginTop: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gridGap: "2rem",
        }}
      >
        {searchedNews.map((result) => {
          return <NewsResults key={result.newsId} {...result} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
