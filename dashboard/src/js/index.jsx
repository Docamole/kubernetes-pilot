import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from 'react-apollo'

import PilotClient from './PilotClient'

import '../sass/blueprint-js.scss'

const pilot = new PilotClient()

const App = () => (
  <ApolloProvider client={pilot}>
    <div>
      Welcome to Pilot!
    </div>
  </ApolloProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('pilot-root')
)
