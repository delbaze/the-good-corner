import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

const resolversArray = loadFilesSync(".", { extensions: ["resolver.ts"] });

export default mergeResolvers(resolversArray);
