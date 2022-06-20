const merge = require('merge');
const webpackConfig = require('./webpack.config');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(webpackConfig, {
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets/demo" }
            ]
        })
    ]
});