import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://test-crud-server.herokuapp.com/graphql"
      : "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const TestCrud = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <TestCrud />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
