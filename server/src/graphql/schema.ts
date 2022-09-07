import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    search(zipcode: String!, countryAbb: String!): Search
  }

  type Search {
    zipcode: String
    country: String
    city: String
    state: String
  }
`
