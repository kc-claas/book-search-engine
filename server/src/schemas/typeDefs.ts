const typeDefs = `
type User {
_id: ID
username: String!
email: String!
bookCount: Int
savedBooks: [Book]
}

type Book {
bookId: String!
author: [String]
description: String!
image: String
link: String
title: String!
}

type Auth {
    token: String
    user: User
}

type Query {
    me: User
}

type Mutation {
    addUser(username: String!, password: String!, email: String!): Auth
    login(username: String!, password: String!): Auth
    saveBook(book: Book): User
    deleteBook(bookId: String!): User

}

`

export default typeDefs