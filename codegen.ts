import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 
    { [process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string]:
      { 
        headers:{
          "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
    }
    } as any
  },
  documents: "src/**/*.graphql.ts",
  generates: {
    "src/gql/index.ts": {
      // preset: "client",
      plugins: [{typescript:{}},{"typescript-operations":{}}, {"typescript-react-apollo":{
        preset:"client"
      }}]
    }
  }
};

export default config;
