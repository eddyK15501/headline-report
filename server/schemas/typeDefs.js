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
        source: String
        title: String
        description: String
        imageUrl: String
        link: String
    }

    type newsInput {
        newsId: String
        source: String
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
        users: [User]
        user(username: String!): User
        me: User
    }
    
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveNews(newsSaved: newsInput): User
        removeNews(newsId: String!): User
    }
`;
