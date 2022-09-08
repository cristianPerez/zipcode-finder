import { getSearch } from '../helpers'
import { Search } from '../db'

/**
 * Function in charge to create a new search if does not exist already
 * @param zipcode
 * @param country
 * @returns
 */
const findAndReturnSearch = async (zipcode: string, country: string) => {
  const searchFiltered = await Search.findOne(
    (search) => search.zipcode === zipcode && search.countryAbb === country
  )

  if (!searchFiltered) {
    const resullApi = await getSearch(zipcode, country)
    await Search.create(resullApi)
    return resullApi
  }

  return searchFiltered
}

/**
 * Resolvers object
 */
export const resolvers = {
  Query: {
    search: (_root, { zipcode, country }) =>
      findAndReturnSearch(zipcode, country),
    searches: () => Search.findAll(),
  },
  Mutation: {
    createSearch: (_root, { input: { zipcode, country } }) =>
      findAndReturnSearch(zipcode, country),
    deleteSearches: async () => {
      const allSearches = await Search.findAll()
      allSearches.forEach((search) => {
        Search.delete(search.id)
      })
      return allSearches
    },
  },
}
