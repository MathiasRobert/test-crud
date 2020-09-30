import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
      id
      title
      description
      price
      createdAt
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      description
      price
      createdAt
    }
  }
`;

export const GET_CUSTOMER_AND_PURCHASES = gql`
  query getCustomerAndPurchases($id: ID!, $nbItems: Int) {
    getCustomer(id: $id) {
      id
      firstname
      lastname
      email
      address
      totalAmountSpent
    }
    getPurchases(customerID: $id, first: $nbItems) {
      id
      productName
      price
      timestamp
    }
  }
`;
