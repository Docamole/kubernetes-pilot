import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from 'react-apollo'

import PilotClient from './lib/PilotClient'

import NavBar from './containers/NavBar'

import '../sass/blueprint-js.scss'

const pilot = new PilotClient()

const App = () => (
  <ApolloProvider client={pilot.client}>
    <NavBar />
    <h4>Welcome to Pilot!</h4>
  </ApolloProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('pilot-root')
)
