'use strict';

let fs = require('fs');

/*function start (response) {
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    console.log('request handler "start" was called');
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}*/

function getTime (response) {
    console.log('request handler "time" was called');
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('11:10');
    response.end();
}

function getDate (response) {
    console.log('request handler "time" was called');
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('02.08.2017');
    response.end();
}

function uploadIndex (response) {
    console.log('request handler "uploadIndex" was called');

    fs.readFile("./index.html", "binary", function (error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(file, "binary");
            response.end();
        }
  });


  /*  response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('hello upload!!!');
    response.end();*/
}

//exports.start = start;
exports.getTime = getTime;
exports.getDate = getDate;
exports.uploadIndex = uploadIndex;