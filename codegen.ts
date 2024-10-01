import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [process.env.HASURA_PROJECT_ENDPOINT as string]: {
      headers: {
        'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
      },
    } as any,
  },
  documents: 'src/**/*.graphql.ts',
  generates: {
    'src/gql/index.ts': {
      plugins: [
        { typescript: {} },
        { 'typescript-operations': {} },
        {
          'typescript-react-apollo': {
            preset: 'client',
          },
        },
      ],
    },
    'introspection.json': {
      plugins: ['introspection'],
      config: {
        minify: true,
      },
    },
  },
};

export default config;
