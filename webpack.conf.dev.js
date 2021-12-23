const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new webpack.SourceMapDevToolPlugin()],
  devServer: {host: '0.0.0.0', hot: true}
}
