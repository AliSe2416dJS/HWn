'use strict';

let server = require('./server.js'),
    router = require('./router.js'),
    requestHandlers = require('./requestHendlers.js'),
    handle = {};

handle['/'] = requestHandlers.uploadStatic;
handle['/time'] = requestHandlers.getTime;
handle['/date'] = requestHandlers.getDate;

server.start(router.route, handle);
