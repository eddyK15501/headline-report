/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import Search from "../components/Searchbar/Search";
import NewsResults from "../components/Card/NewsResults";
import Signup from "../components/Signup/Signup";

import { saveNewsIds, getSavedNewsIds } from "../../utils/localStorage";

const Homepage = () => {
  const [searchedNews, setSearchedNews] = useState([]);
  const [storagedNews, setStoragedNews] = useState(getSavedNewsIds);

  useEffect(() => {
    return () => saveNewsIds(storagedNews);
  });

  const handleSearchInput = (search) => {
    setSearchedNews(search)
  }

  return (
    <div style={{ margin: "1em" }}>
        <Search handleSearchInput={handleSearchInput} />

        
    </div>
  )
};

export default Homepage;
