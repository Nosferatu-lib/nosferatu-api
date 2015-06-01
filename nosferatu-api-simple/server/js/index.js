import restify  from 'restify';
import passport from 'passport';
import config   from '../../node-config';
import routes   from './routes';

const serverSettings = config[process.env.NODE_ENV]

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
        .use(passport.initialize());

    server.use(function logger(req,res,next) {
        console.log(new Date(),req.method,req.url);
        next();
    });

    // Start server
    server.listen(serverSettings.server.port, serverSettings.server.host, function() {
        console.log('%s listening at %s', server.name, server.url);
    });

    // Set routes
    routes.set(server, ['capi']);
}

export default init;