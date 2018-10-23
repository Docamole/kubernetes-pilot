import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const NAMESPACES = gql`{
  activeNamespace @client
  namespaces {
    id
    name
  }
}`

const NamespaceSelect = () => (
  <Query
    query={NAMESPACES}
  >
    {({
      loading, error, data, client
    }) => (
      <div>
        Namespace&nbsp;
        <div className="bp3-select">
          <select
            value={data.activeNamespace}
            onChange={e => client.writeData({ // TODO: Implement this as a mutation?
              data: {
                activeNamespace: e.target.value
              }
            })}
          >
            {(!loading && !error) && data.namespaces.map(({ name }) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
      </div>
    )}
  </Query>
)

export default NamespaceSelect
