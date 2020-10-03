import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import resolvers from "./graphql/resolvers";
import types from "./graphql/types";

const server = new GraphQLServer({
  typeDefs: types,
  resolvers,
  context: (request) => ({
    ...request,
    prisma,
  }),
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
