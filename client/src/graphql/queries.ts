import { gql } from '@apollo/client'

export const CREATE_SEARCH_MUTATION = gql`
  mutation ($input: CreateSearchInput!) {
    search: createSearch(input: $input) {
      city
      country
      state
      zipcode
    }
  }
`
