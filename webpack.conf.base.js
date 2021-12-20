const HtmlWebpackPlugin = require('html-webpack-plugin');
const project = require('./project.json');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [`${__dirname}/${project.scripts.source.index}`],
  module: {
    rules: [
      {
       test: /\.png/,
       type: 'asset/resource'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@environment$': `${__dirname}/${project.environments.source.root}/${env}.js`,
      '@src': `${__dirname}/${project.source.root}`
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: project.index.source.file,
      minify: {
        collapseWhitespace: true
      }
    })
  ]
}
