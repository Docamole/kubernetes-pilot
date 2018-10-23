import React from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider } from 'react-apollo'

import PilotClient from '../../lib/PilotClient'

const pilot = new PilotClient()

const ApiProvider = ({ children }) => (
  <ApolloProvider client={pilot.client}>
    {children}
  </ApolloProvider>
)

ApiProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export default ApiProvider
