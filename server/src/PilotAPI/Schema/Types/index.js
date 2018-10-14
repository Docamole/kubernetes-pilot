const { ApiType } = require('./ApiType')
const { NamespaceType } = require('./NamespaceType')

const QueryType = `
  type Query {
    api: Api,
    namespaces: [Namespace]
  }
`

module.exports.Types = [
  QueryType,
  ApiType,
  NamespaceType
]
