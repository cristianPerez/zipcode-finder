import { gql } from '@apollo/client'

export const CREATE_SEARCH_MUTATION = gql`
  mutation CreateSearch($input: CreateSearchInput!) {
    search: createSearch(input: $input) {
      id
      city
      country
      countryAbb
      state
      zipcode
    }
  }
`
export const DELETE_SEARCHES_MUTATION = gql`
  mutation DeleteSearch {
    deleteSearches {
      id
    }
  }
`

export const SEARCH_QUERY = gql`
  query SearchQuery($zipcode: String!, $country: String!) {
    search(zipcode: $zipcode, country: $country) {
      id
      city
      country
      countryAbb
      state
      zipcode
    }
  }
`

export const SEARCHES_QUERY = gql`
  query SearchesQuery {
    searches {
      id
      zipcode
      country
      countryAbb
      city
    }
  }
`
