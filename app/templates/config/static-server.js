var path = require('path')
var express = require('express')
var open = require("open")
var iPackage = require('../package.json')
var hashToPort = require('hash-to-port')
var hotServerPort = hashToPort(iPackage.name + 'fast-flow/generator-react-module:server')

var app = express();
app.use(express.static(__dirname + '/../output'))
app.use(function (req, res, next) {
    var versionUrl = '/' + iPackage.version
    if (req.path.indexOf(versionUrl) === 0) {
        res.redirect(req.path.replace(versionUrl, ''))
    }
    next()
})
console.log(__dirname + '/../output')
app.listen(hotServerPort, function(err) {
  if (err) {
    return console.error(err);
  }
  var url = 'http://localhost:' + hotServerPort
  open(url)
  console.log('Static server listening at ' + url);
})
