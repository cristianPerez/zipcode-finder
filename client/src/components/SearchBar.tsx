import React from 'react'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import CountrySelect from './CountrySelect'
import { useCreateSearch } from '../hooks/search'

const SearchBar = () => {
  const { createSearch } = useCreateSearch()

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    const search = await createSearch({ zipcode: '10500', country: 'TH' })
    console.log('[SEARCH], :', search)
  }

  return (
    <Container maxWidth="sm">
      <Box component="form" noValidate autoComplete="off">
        <CountrySelect />
        <TextField id="outlined-basic" label="ZipCode" variant="outlined" />
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Container>
  )
}

export default SearchBar
