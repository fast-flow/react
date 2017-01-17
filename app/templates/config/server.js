var path = require('path')
var webpack = require('webpack')
var express = require('express')
var config = require('./webpack.dev')
var open = require("open")
var iPackage = require('../package.json')
var hashToPort = require('hash-to-port')
var hotServerPort = hashToPort(iPackage.name + 'fast-flow/generator-react-module:server')

var app = express();
var compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
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
  console.log('Listening at ' + url);
})
