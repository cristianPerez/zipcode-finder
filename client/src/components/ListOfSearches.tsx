import React from 'react'
import { useApolloClient } from '@apollo/client'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { useSearches, useDeleteSearches } from '../hooks/search'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

const ListOfSearches = () => {
  const { deleteSearches } = useDeleteSearches()
  let { searches = [], loading, error } = useSearches()
  const client = useApolloClient()

  const resetCacheHandler = async () => {
    client.cache.restore({})
    await deleteSearches()
  }

  console.log('[ListOfSearches]', { searches, loading, error })
  return (
    <Box mt={2}>
      <Typography variant="h5">List of searches</Typography>
      {error && (
        <Alert severity="error">There is a problem loading the Searches</Alert>
      )}
      {searches.length > 0 && (
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={resetCacheHandler} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      )}
      {loading && <CircularProgress />}
      {searches && searches.map((search: any) => <Box>{search.zipcode} - {search.country} - { search.city }</Box>)}
    </ Box>
  )
}

export default ListOfSearches
