import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from 'react-apollo'

import PilotClient from './lib/PilotClient'

import NavBar from './containers/NavBar'
import ActiveNamespace from './components/ActiveNamespace'

import '../sass/blueprint-js.scss'

const pilot = new PilotClient()

const App = () => (
  <ApolloProvider client={pilot.client}>
    <NavBar />
    <ActiveNamespace />
  </ApolloProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('pilot-root')
)
