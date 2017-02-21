var webpackConfig = require('./webpack.config.js')()
webpackConfig = {
    module: webpackConfig.module,
    devtool: 'cheap-module-eval-source-map',
    externals: {
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    }
}
module.exports = webpackConfig
