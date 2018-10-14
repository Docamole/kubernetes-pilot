import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const Namespaces = () => (
  <Query
    query={gql`
      {
        namespaces {
          name
          status
        }
      }
    `}
  >
    {({ loading, error, data }) => (
      <div className="bp3-select">
        <select>
          {(!loading && !error) && data.namespaces.map(({ name }) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </div>
    )}
  </Query>
)

export default Namespaces
