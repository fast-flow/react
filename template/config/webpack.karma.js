var webpackConfig = require('./webpack.config.js')()
webpackConfig = {
    module: webpackConfig.module,
    devtool: webpackConfig.devtool
}
module.exports = webpackConfig
