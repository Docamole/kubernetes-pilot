const { gql } = require('apollo-server-express')

module.exports.ApiType = gql`
  type Api {
    version: String
  }
`
