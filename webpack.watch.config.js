const path = require('path');
const merge = require('merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
});