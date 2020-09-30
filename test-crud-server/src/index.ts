import express from "express";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { initDb } from "./config/initDb";

// Create an express server and a GraphQL endpoint
var schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({ schema, resolvers });

const app = express();
server.applyMiddleware({ app });

initDb();

app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
