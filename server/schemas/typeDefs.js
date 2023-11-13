const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        newsCount: Int
        bookmarkedNews: [News]!
    }

    type News {
        newsId: String
        title: String
        description: String
        imageUrl: String
        link: String
    }

    input newsInput {
        newsId: String
        title: String
        description: String
        imageUrl: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }
    
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        removeUser(username: String!, email: String! password: String!): User
        login(email: String!, password: String!): Auth
        saveNews(newsSaved: newsInput): User
        removeNews(newsId: String!): User
    }
`;

module.exports = typeDefs;
