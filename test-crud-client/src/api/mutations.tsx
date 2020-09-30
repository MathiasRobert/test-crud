import gql from "graphql-tag";

export const ADD_PRODUCT = gql`
  mutation AddProduct($title: String!, $description: String!, $price: Float!) {
    addProduct(title: $title, description: $description, price: $price) {
      id
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $id: ID!
    $title: String!
    $description: String!
    $price: Float!
  ) {
    updateProduct(
      id: $id
      title: $title
      description: $description
      price: $price
    )
  }
`;
