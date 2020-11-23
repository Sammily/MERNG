const { gql } = require('apollo-server');

module.exports = gql` #объявление типов для данных приложения
  type Post {    #сообщаем схеме о том как выглядят данные
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
type User{
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
}


input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
}
  type Query {     #описываем "корневой тип" Query
    getPosts: [Post]    #объявляем что ожидаем поле getPosts типа Post
    getPost(postId: ID!): Post
  
  }

  type Mutation {
      register(registerInput: RegisterInput) : User!
      login(username: String!, password: String!): User!
      createPost(body: String!): Post!
      deletePost(postId: ID!): String!
  }
`;
