const formatDate = (date) => {
  date.setDate(date.getDate() - 2);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// import.meta.env setup with Heroku, not working
const searchNews = (search) => {
  const today = new Date();
  const formattedDate = formatDate(today);

  const params = new URLSearchParams({
    q: search,
    from: formattedDate,
    sortBy: "popularity",
    language: "en",
    pageSize: 30,
    apiKey: import.meta.env.VITE_API_KEY,
  });

  return fetch(`https://newsapi.org/v2/everything?${params}`);
};

export default searchNews;
