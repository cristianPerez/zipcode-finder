import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    search(zipcode: String!, country: String!): Search
  }

  type Mutation {
    createSearch(input: CreateSearchInput): Search
  }

  input CreateSearchInput {
    zipcode: String
    country: String
  }

  type Search {
    zipcode: String
    country: String
    city: String
    state: String
  }
`
