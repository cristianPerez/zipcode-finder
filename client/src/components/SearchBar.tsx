import React, { useState } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import { useCreateSearch } from '../hooks/search'
import { countries, defaultCountry } from '../utils/helpers'
import Alert from '@mui/material/Alert'

const SearchBar = () => {
  const [country, setCountry] = useState(defaultCountry)
  const [zipcode, setZipcode] = useState('')
  const { createSearch, loading, error } = useCreateSearch()

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    await createSearch({
      zipcode: zipcode || '',
      country: country?.code,
    })
  }

  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        {error ? (
          <Alert severity="error">Check your data and try again</Alert>
        ) : null}
        <Box mb={2} mt={2}>
          <Autocomplete
            options={countries}
            autoHighlight
            onChange={(event: any, value: any) => setCountry(value)}
            defaultValue={countries.find((country) => country.code === 'US')}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a country"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="ZipCode"
            variant="outlined"
            onChange={(event) => setZipcode(event.target.value)}
          />
        </Box>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={handleSubmit}
            disabled={!zipcode || !country || loading}
          >
            Submit
          </Button>
        )}
      </Box>
    </>
  )
}

export default SearchBar
