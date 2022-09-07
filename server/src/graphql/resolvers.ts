import { getSearch } from '../helpers'

export const resolvers = {
  Query: {
    search: (_root, { zipcode, country }) => getSearch(zipcode, country),
  },
  Mutation: {
    createSearch: (_root, { input: { zipcode, country } }) => getSearch(zipcode, country),
  }
}
