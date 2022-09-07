import { useMutation } from '@apollo/client'

import { CREATE_SEARCH_MUTATION } from '../graphql/queries'
import { CreateSearchType } from '../graphql/types'

export function useCreateSearch () {
  const [mutate, { loading, error }] = useMutation(CREATE_SEARCH_MUTATION)
  return {
    createSearch: async (input: CreateSearchType) => {
      const {
        data: { search },
      } = await mutate({
        variables: { input },
      })
      return search
    },
    loading,
    error,
  }
}
