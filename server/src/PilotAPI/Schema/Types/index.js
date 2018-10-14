const { gql } = require('apollo-server-express')

const { ApiType } = require('./ApiType')

const QueryType = gql`
  type Query {
    api: Api
  }
`

module.exports.Types = [
  QueryType,
  ApiType
]
