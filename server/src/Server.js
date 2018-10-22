const path = require('path')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const { Schema } = require('./API/Schema')

const app = express()

// TODO: Update readme with PORT and DASHBOARD env
module.exports.Server = class Server {
  constructor() {
    this.port = process.env.PORT || 8181
    this.server = new ApolloServer(Schema)
    this.server.applyMiddleware({ app })
  }

  start() {
    Server.configureDashboard(this.port)
    app.listen(this.port, () => {
      console.log(`Pilot API:\t\thttp://localhost:${this.port}${this.server.graphqlPath}`)
    })
  }

  static configureDashboard(port) {
    if (process.env.DASHBOARD === 'disable') {
      console.log('Pilot Dashboard:\tDisabled')
    } else {
      console.log(`Pilot Dashboard:\thttp://localhost:${port}/`)

      // Serve static files from dashboard/dist directory
      app.use(
        express.static(
          path.join(__dirname, '../../dashboard/dist')
        )
      )

      // Handle default requests
      app.get('*', (req, res) => {
        res.sendFile(
          path.join(__dirname, '../../dashboard/dist/index.html')
        )
      })
    }
  }
}
