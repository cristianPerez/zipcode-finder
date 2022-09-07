import React from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import logo from './logo.svg'
import CountrySelect from './components/CountrySelect'

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Container maxWidth="sm">
        <Box>
          <CountrySelect />
          <TextField id="outlined-basic" label="ZipCode" variant="outlined" />
          <Button color='primary' variant="contained">Submit</Button>
        </Box>
      </Container>
    </div>
  )
}

export default App
