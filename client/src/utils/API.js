/* eslint-disable no-undef */

// import.meta.env for Heroku does not work; undefined on runtime
const searchNews = (search) => {
  const params = new URLSearchParams({
    q: search,
    lang: 'en',
    country: 'us',
    max: 9,
    nullable: 'none',
    apikey: '9dd586a0a4700bd3caf8f42fab6b53ca',
  });

  return fetch(`https://gnews.io/api/v4/search?${params}`);
};

export default searchNews;
