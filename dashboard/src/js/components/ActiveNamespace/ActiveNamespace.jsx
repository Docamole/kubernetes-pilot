import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

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
              <ul>
                {data.namespace.deployments.map(deployment => (
                  <li key={deployment.name}>
                    {deployment.name}
                  </li>
                ))}
              </ul>
            </React.Fragment>
          )
        }}
      </Query>
    )}
  </Query>
)

export default ActiveNamespace
