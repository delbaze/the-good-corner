import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: './src/typedefs/*.graphql',
  generates: {
    './src/types/resolvers-types.ts': {
      config: {
        useIndexSignature: true,
        // maybeValue: "T | undefined",
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};
export default config;