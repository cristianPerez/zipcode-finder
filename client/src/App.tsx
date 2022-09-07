import React from 'react'
import { ApolloProvider } from '@apollo/client'

import './App.css'
import logo from './logo.svg'
import { client } from './graphql/apolloclient'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <SearchBar />
      </div>
    </ApolloProvider>
  )
}

export default App
