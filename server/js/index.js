var restify  = require('restify'),
    passport = require('passport'),
    path     = require('path'),
    config   = require('./config'),
    routes   = require('./routes'),
    auth     = require('./utils/auth'),
    appRoot  = config.paths.appRoot;

function init() {
    setupServer();
}

function setupServer() {
    var server = restify.createServer({
        name: 'API server',
        version: '1.0.0'
    });

    // Configure restify
    server
        .use(restify.gzipResponse())
        .use(restify.CORS())
        .use(restify.queryParser({ mapParams: false }))
        // Initialize Passport!  Note: no need to use session middleware when each
        // request carries authentication credentials, as is the case with basic strategy
        .use(passport.initialize());

    server.use(function logger(req,res,next) {
        console.log(new Date(),req.method,req.url);
        next();
    });

    // Start server
    server.listen(config.server.port, config.server.host, function() {
        console.log('%s listening at %s', server.name, server.url);
    });

    // Set routes
    routes.set(server, ['capi']);
}

module.exports = init;