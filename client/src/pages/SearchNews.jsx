/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import searchNews from "../../utils/API";

const SearchNews = () => {
  // THIS IS JUST TEMPORARY; uncomment useEffect() to get News API data in console.log()
  //   useEffect(() => {
  //     searchNews("today")
  //       .then((res) => res.json())
  //       .then(({ articles }) => console.log(articles));
  //   }, []);

  return <div style={{ margin: "1em" }}>SearchNews</div>;
};

export default SearchNews;
