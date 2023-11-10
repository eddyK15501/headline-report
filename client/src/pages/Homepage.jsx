/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

import Search from "../components/Searchbar/Search";
import NewsResults from "../components/Card/NewsResults";

import { saveNewsIds, getSavedNewsIds } from "../utils/localStorage";
import { GET_ME } from '../utils/queries';
import { SAVE_NEWS } from '../utils/mutations';

const Homepage = () => {
  const [searchedNews, setSearchedNews] = useState([]);
  const [storagedNews, setStoragedNews] = useState(getSavedNewsIds);

  // const [saveNews, _] = useMutation(SAVE_NEWS, {
  //   refetchQueries: [
  //     { query: GET_ME },
  //   ],
  //   awaitRefetchQueries: true,
  // });

  useEffect(() => {
    return () => saveNewsIds(storagedNews);
  });

  const handleSearchInput = (search) => {
    setSearchedNews(search);
    console.log(search);
  };

  // function for saving news that get bookmarked
  // const handleSaveNews = async (newsId) => {
  //   const findNews = searchedNews.find(news => news.newsId === newsId);
  //   console.log(findNews);

  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const { data } = await saveNews({
  //       variables: { newsSaved: { ...findNews } }
  //     });

  //     console.log(data.saveNews.bookmarkedNews);

  //     setStoragedNews([...storagedNews, findNews.newsId]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <div style={{ margin: "1em", paddingBottom: "3.5rem" }}>
      <Search handleSearchInput={handleSearchInput} />

      <div
        style={{
          padding: "0 2rem",
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
