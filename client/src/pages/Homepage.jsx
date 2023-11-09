/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import searchNews from "../../utils/API";

import Search from "../components/Search";

import NewsResults from "../components/NewsResults";
import CreateAccount from "../components/CreateAccount";

const Homepage = () => {
  // THIS IS JUST TEMPORARY; uncomment useEffect() to get News API data in console.log()
  //   useEffect(() => {
  //     searchNews("today")
  //       .then((res) => res.json())
  //       .then(({ articles }) => console.log(articles));
  //   }, []);

  return (
    <div style={{ margin: "1em" }}>
        <Search />
        <NewsResults/>
        <br></br>
        <CreateAccount/>
    </div>
  )
};

export default Homepage;
