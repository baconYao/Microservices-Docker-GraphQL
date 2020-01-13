import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";
import accessEnv from "#root/helpers/accessEnv";

import formatGraphQLError from "./formatGraphQLError";

const PORT = accessEnv("PORT", 7000);

const apolloServer = new ApolloServer({
  context: a => a,
  formatError: formatGraphQLError,
  resolvers,
  typeDefs
});

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
  })
);

apolloServer.applyMiddleware({
  app,
  cors: false,      // 因為有使用了cors middleware，所以在這裡就設為 false
  path: "/graphql"
});

app.listen(PORT, "0.0.0.0", () => {
  console.info(`API gateway listening on ${PORT}`);
});