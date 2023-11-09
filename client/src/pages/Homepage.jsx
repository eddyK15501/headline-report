/* eslint-disable no-unused-vars */
import { useState } from "react";

import Search from "../components/Searchbar/Search";

import NewsResults from "../components/Card/NewsResults";
import Signup from "../components/Signup/Signup";

const Homepage = () => {
  const [searchedNews, setSearchedNews] = useState([])

  const handleSearchInput = (search) => {
    setSearchedNews(search)
    console.log(search)
  }

  return (
    <div style={{ margin: "1em" }}>
        <Search handleSearchInput={handleSearchInput} />

        <NewsResults />
        <br></br>
        <Signup />
    </div>
  )
};

export default Homepage;
