var paths   = require('./paths'),
    config;

config = require(paths().config)[process.env.NODE_ENV];

config.paths = paths();

module.exports = config;