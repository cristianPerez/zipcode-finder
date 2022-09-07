import { ApolloServer } from 'apollo-server'

import { resolvers } from '../graphql/resolvers'
import { typeDefs } from '../graphql/schema'

export const apolloServer = new ApolloServer({ typeDefs, resolvers })