#!/usr/bin/env node

const { Server } = require('./Server')

const pilotServer = new Server()
pilotServer.start()
