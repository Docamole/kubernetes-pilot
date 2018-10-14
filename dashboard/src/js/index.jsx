import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from 'react-apollo'

import PilotClient from './PilotClient'

import NavBar from './containers/NavBar'

import '../sass/blueprint-js.scss'

const pilot = new PilotClient()

const App = () => (
  <ApolloProvider client={pilot.client}>
    <NavBar />
    ToDo: Get redux tied in and show the current namespace details from the dropdown above
  </ApolloProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('pilot-root')
)
