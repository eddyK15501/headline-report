export const getSavedNewsIds = () => {
  const newsIds = localStorage.getItem("saved_news")
    ? JSON.parse(localStorage.getItem("saved_news"))
    : [];

  return newsIds;
};

export const saveNewsIds = (array) => {
  if (array.length) {
    localStorage.setItem("saved_news", JSON.stringify(array));
  } else {
    localStorage.removeItem("saved_news");
  }
};

export const removeNewsId = (newsId) => {
  const newsIds = localStorage.getItem("saved_news")
    ? JSON.parse(localStorage.getItem("saved_news"))
    : null;

  if (!newsIds) {
    return false;
  }

  const updatedIds = newsIds?.filter((id) => id !== newsId);
  localStorage.setItem("saved_news", JSON.stringify(updatedIds));

  return true;
};
