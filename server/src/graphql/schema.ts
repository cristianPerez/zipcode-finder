import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    search(zipcode: String!, country: String!): Search,
    searches: [Search!]
  }

  type Mutation {
    createSearch(input: CreateSearchInput): Search
    deleteSearches: [Search]
  }

  input CreateSearchInput {
    zipcode: String
    country: String
  }

  type Search {
    id: ID!
    zipcode: String
    country: String
    countryAbb: String
    city: String
    state: String
  }
`
