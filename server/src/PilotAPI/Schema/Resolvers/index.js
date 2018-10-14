const { PilotAPI } = require('../../../PilotAPI')

const { ApiResolver } = require('./ApiResolver')

const QueryResolver = {
  api: () => PilotAPI
}

module.exports.Resolvers = {
  Query: QueryResolver,
  Api: ApiResolver
}
