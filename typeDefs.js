// ! means non-nullable, so it cannot be null

export const typeDefs = `#graphql
    type Author {
        id: ID!
        name: String!
        books: [Book!]!
    }

    type Book {
        id: ID!
        title: String!
        publishYear: Int!
        author: Author!
        authorId: ID!
    }

    type Query {
        authors: [Author!]!
        author(id: ID!): Author
        books: [Book!]!
        book(id: ID!): Book
    }



`;

/**
    type Mutation {
        addAuthor(name: String!): Author
        addBook(title: String!, publishYear: Int!, authorId: ID!): Book
        updateAuthor(id: ID!, name: String!): Author
        updateBook(id: ID!, title: String!, publishYear: Int!, authorId: ID!): Book
        deleteAuthor(id: ID!): Author
        deleteBook(id: ID!): Book
    } */
