'use strict';

let fs = require('fs'),
    path = require('path');

function getTime (response) {
    let now = new Date(),
        hh = _toTwoDigits(now.getHours()),
        mm = _toTwoDigits(now.getMinutes()),
        ss = _toTwoDigits(now.getSeconds()),
        time = `${hh}:${mm}:${ss}`;

    console.log('request handler "time" was called');
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(time);
    response.end();
}

function getDate (response) {
    let now = new Date(),
        dd = _toTwoDigits(now.getDate()),
        mm = _toTwoDigits(now.getMonth() + 1),
        yyyy = now.getFullYear(),
        date = `${dd}.${mm}.${yyyy}`;

    console.log('request handler "time" was called');
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(date);
    response.end();
}

function uploadStatic (response) {
    console.log('request handler "uploadStatic" was called');

    fs.readFile('./index.html', "binary", function (error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": 'text/html'});
            response.write(file, "binary");
            response.end();
        }
    });
}

function _toTwoDigits (n) {
    return (n < 10)? '0' + n: n;
}

exports.getTime = getTime;
exports.getDate = getDate;
exports.uploadStatic = uploadStatic;