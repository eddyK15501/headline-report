import { gql } from '@apollo/client';

const GET_ME = gql`
    query me {
        me {
            _id
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
`

const ALL_USERS = gql`
    query allUsers {
        users {
            _id
            username
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
`

const GET_USER = gql`
    query oneUser($username: String!) {
        user(username: $username) {
            _id
            username
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
`

export { GET_ME, ALL_USERS, GET_USER }