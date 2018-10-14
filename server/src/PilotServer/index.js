const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const { Schema } = require('../PilotAPI/Schema')

const app = express()

module.exports.PilotServer = class PilotServer {
  constructor() {
    this.port = 8181
    this.server = new ApolloServer(Schema)
  }

  start() {
    this.server.applyMiddleware({ app })
    app.listen(this.port, () => {
      console.log(`Kubernetes Pilot API is running at http://localhost:${this.port}${this.server.graphqlPath}`)
    })
  }
}
