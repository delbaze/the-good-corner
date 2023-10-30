import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./typedefs";
import resolvers from "./resolvers";
import db from "./db";


const server = new ApolloServer<{}>({
  typeDefs,
  resolvers,

});

async function main() {
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
