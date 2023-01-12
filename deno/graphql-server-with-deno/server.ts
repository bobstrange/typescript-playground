import { Server, GraphQLHTTP, makeExecutableSchema, gql } from "./deps.ts";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new Server({
  handler: async (req) => {
    const { pathname } = new URL(req.url);
    if (pathname === "/graphql") {
      return await GraphQLHTTP<Request>({ schema, graphiql: true })(req);
    }
    return new Response("Not found", { status: 404 });
  },
  port: 8080,
});

server.listenAndServe();

/**
 * http://localhost:8080/graphql
 */
