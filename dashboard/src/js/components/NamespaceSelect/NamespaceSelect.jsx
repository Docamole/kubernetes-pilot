import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const NAMESPACES = gql`{
  namespaces {
    name
  }
  workspace @client {
    activeNamespace
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
        Namespace:&nbsp;
        <div className="bp3-select">
          <select
            value={data.activeNamespace}
            onChange={e => client.writeData({ // TODO: Implement this as a mutation?
              data: {
                workspace: {
                  activeNamespace: e.target.value,
                  __typename: 'Workspace'
                }
              }
            })}
          >
            {(!loading && !error) && data.namespaces.map(({ name }) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
        <button type="button" className="bp3-button bp3-icon-add" />
      </div>
    )}
  </Query>
)

export default NamespaceSelect
