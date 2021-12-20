const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.conf.base');
const devConfig = require('./webpack.conf.dev');

module.exports = merge(baseConfig, devConfig);
