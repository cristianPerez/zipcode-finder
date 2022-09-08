import { useMutation, useQuery } from '@apollo/client'

import {
  CREATE_SEARCH_MUTATION,
  SEARCHES_QUERY,
  DELETE_SEARCHES_MUTATION,
} from '../graphql/queries'
import { CreateSearchType, WrapSearch } from '../graphql/types'

export function useDeleteSearches() {
  const [mutate, { loading, error }] = useMutation(DELETE_SEARCHES_MUTATION)
  return {
    deleteSearches: async () => {
      const {
        data: { searches },
      } = await mutate({
        update: (cache, { data: { searches } }) => {
          cache.writeQuery({
            query: SEARCHES_QUERY,
            data: { searches: [] },
          })
        },
      })
      return searches
    },
    loading,
    error,
  }
}

export function useCreateSearch() {
  const [mutate, { loading, error }] = useMutation(CREATE_SEARCH_MUTATION)
  return {
    createSearch: async (input: CreateSearchType) => {
      const {
        data: { search },
      } = await mutate({
        variables: { input },
        update: (cache, { data: { search } }) => {
          const wrap: WrapSearch = cache.readQuery({
            query: SEARCHES_QUERY,
          }) || { searches: [] }
          cache.writeQuery({
            query: SEARCHES_QUERY,
            data: { searches: [search, ...wrap.searches] },
          })
        },
      })
      return search
    },
    loading,
    error,
  }
}

export function useSearches() {
  const { data, loading, error } = useQuery(SEARCHES_QUERY, {
    fetchPolicy: 'cache-first',
  })
  return {
    searches: data?.searches.slice(0, 5),
    loading,
    error,
  }
}
