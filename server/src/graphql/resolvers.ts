import { getSearch } from '../helpers'

export const resolvers = {
  Query: {
    search: async (_root, { zipcode, countryAbb }) => getSearch(zipcode, countryAbb),
  },
}
