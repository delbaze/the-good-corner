import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import db from "./db";
import { buildSchema } from "type-graphql";
import CategoryResolver from "./resolvers/category.resolver";
import { AdResolver } from "./resolvers/ad.resolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [CategoryResolver, AdResolver],
  });
  const server = new ApolloServer<{}>({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req, res }) => {
      return {};
    },
  });

  await db.initialize();

  console.log(`🚀  Server ready at: ${url}`);
}
main();
