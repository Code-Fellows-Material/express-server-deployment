'use strict';

const server = require('./app');

const PORT = process.env.PORT || 3000;

server.start(PORT);