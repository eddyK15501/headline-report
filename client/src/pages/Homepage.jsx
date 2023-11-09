/* eslint-disable no-unused-vars */
import { useState } from "react";

import Search from "../components/Searchbar/Search";

import NewsResults from "../components/Card/NewsResults";
import CreateAccount from "../components/Login/CreateAccount";

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
        <CreateAccount />
    </div>
  )
};

export default Homepage;
