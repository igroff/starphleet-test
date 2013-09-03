#! /usr/bin/env node
var express = require('express');
var app = express();

var VERSION=3;

app.get('/diagnostic', function(request, response) { response.send(500); });
app.get('*', function(request, response) { response.end( VERSION + "" + request.path.slice(1)); });


app.listen(3000);
console.log('Listening on 3000');
