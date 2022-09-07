import { ApolloClient, InMemoryCache } from '@apollo/client'

// TODO: Move this URL to env vars
const GRAPHQL_URL = 'http://localhost:9000/'

export const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
})