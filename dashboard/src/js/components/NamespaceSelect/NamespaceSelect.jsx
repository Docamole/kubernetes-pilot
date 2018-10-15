import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const NAMESPACES = gql`{
  activeNamespace @client
  namespaces {
    name
  }
}`

const NamespaceSelect = () => (
  <Query
    // pollInterval={2000}
    query={NAMESPACES}
  >
    {({
      loading, error, data, client
    }) => (
      <div className="bp3-select">
        <select
          value={data.activeNamespace}
          onChange={e => client.writeData({ data: { activeNamespace: e.target.value } })}
        >
          {(!loading && !error) && data.namespaces.map(({ name }) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </div>
    )}
  </Query>
)

export default NamespaceSelect
