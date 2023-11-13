import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
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

export const ADD_USER = gql`
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

export const SAVE_NEWS = gql`
  mutation saveNews($newsSaved: newsInput) {
    saveNews(newsSaved: $newsSaved) {
      username
      email
      newsCount
      bookmarkedNews {
        newsId
        title
        description
        imageUrl
        link
      }
    }
  }
`;

export const REMOVE_NEWS = gql`
  mutation removeNews($newsId: String!) {
    removeNews(newsId: $newsId) {
      username
      email
      newsCount
      bookmarkedNews {
        newsId
        title
        description
        imageUrl
        link
      }
    }
  }
`;
