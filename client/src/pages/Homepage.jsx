/* eslint-disable no-unused-vars */
import { useState } from "react";

import Search from "../components/Search";

const Homepage = () => {
  const [searchedNews, setSearchedNews] = useState([])

  const handleSearchInput = (search) => {
    setSearchedNews(search)
    console.log(search)
  }

  return (
    <div style={{ margin: "1em" }}>
        <Search handleSearchInput={handleSearchInput} />
    </div>
  )
};

export default Homepage;
