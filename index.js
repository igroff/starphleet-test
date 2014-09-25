#! /usr/bin/env node
var express = require('express');
var app = express();

var VERSION=27
  
app.get('/diagnostic', function(request, response) { response.send(500); });
app.get('*', function(request, response) { response.end( VERSION + " " + request.path.slice(1)); });

PORT = process.env.PORT || 3000
app.listen(PORT);
console.log('Listening on ' + PORT);
