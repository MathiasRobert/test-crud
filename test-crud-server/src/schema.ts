import { gql } from "apollo-server-express";

// GraphQL schema
export const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    description: String!
    price: Float!
  }

  type Query {
    getProducts: [Product]
  }

  type Mutation {
    addProduct(title: String!, description: String!, price: Float): Product
  }
`;
