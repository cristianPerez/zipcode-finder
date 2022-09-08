import React from 'react'
import { ApolloProvider } from '@apollo/client'

import './App.css'
import logo from './logo.svg'
import { client } from './graphql/apolloclient'
import SearchBar from './components/SearchBar'
import ListOfSearches from './components/ListOfSearches'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h5">We just need your ziocode</Typography>
        </header>
        <Container maxWidth="sm">
          <SearchBar />
          <ListOfSearches />
        </Container>
      </div>
    </ApolloProvider>
  )
}

export default App
