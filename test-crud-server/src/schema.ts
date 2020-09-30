import { gql } from "apollo-server-express";

// GraphQL schema
export const typeDefs = gql`
  scalar DateTime

  type Product {
    id: ID!
    title: String!
    description: String!
    price: Float!
    createdAt: DateTime!
  }

  type Query {
    getProducts: [Product]
    getProduct(id: ID!): Product
  }

  type Mutation {
    addProduct(title: String!, description: String!, price: Float!): Product
    updateProduct(
      id: ID!
      title: String!
      description: String!
      price: Float!
    ): Boolean
    deleteProduct(id: ID!): Boolean
  }
`;
