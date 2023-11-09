import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

const SAVE_NEWS = gql`
  mutation saveNews($newsSaved: newsInput) {
    saveNews(newsSaved: $newsSaved) {
      username
      email
      newsCount
      bookmarkedNews {
        newsId
        source
        title
        description
        imageUrl
        link
      }
    }
  }
`;

const REMOVE_NEWS = gql`
  mutation removeNews($newsId: String!) {
    removeNews(newsId: $newsId) {
      username
      email
      newsCount
      bookmarkedNews {
        newsId
        source
        title
        description
        imageUrl
        link
      }
    }
  }
`;

export { ADD_USER, LOGIN_USER, SAVE_NEWS, REMOVE_NEWS };
