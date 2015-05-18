var path    = require('path'),
    appRoot = path.resolve(__dirname, '../../../');

function getPaths() {
    return {
        'appRoot': appRoot,
        'config' : path.join(appRoot, 'node-config.js')
    };
}

module.exports = getPaths;
