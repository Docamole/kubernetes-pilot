import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { Card, Elevation } from '@blueprintjs/core'

const ACTIVE_NAMESPACE = gql`{
  activeNamespace @client
}`

const NAMESPACE_DETAILS = gql`
  query NamespaceDetails($name: String!) {
    namespace(name: $name) {
      id
      name
      status
      deployments {
        name
      }
    }
  }
`

const ActiveNamespace = () => (
  <Query query={ACTIVE_NAMESPACE}>
    {client => (
      <Query query={NAMESPACE_DETAILS} variables={{ name: client.data.activeNamespace }}>
        {({ loading, error, data }) => {
          if (loading) return null
          if (error) return `Error!: ${error}`
          return (
            <React.Fragment>
              {data.namespace.deployments.map(deployment => (
                <React.Fragment key={deployment.name}>
                  <Card interactive elevation={Elevation.TWO}>
                    <h5><a href="#">{deployment.name}</a></h5>
                  </Card>
                  <br />
                </React.Fragment>
              ))}
            </React.Fragment>
          )
        }}
      </Query>
    )}
  </Query>
)

export default ActiveNamespace
