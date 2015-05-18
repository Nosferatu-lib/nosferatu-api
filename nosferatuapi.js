var path = require('path'),
    app  = null;

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

function StartApp() {
    app = require('./server/js/');
    app();
}

module.exports = StartApp();