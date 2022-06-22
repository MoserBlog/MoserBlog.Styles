const path = require('path');
const merge = require('merge');
const webpackConfig = require('./webpack.config');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(webpackConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.min.js'
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.min.css'
        }),
        new CleanWebpackPlugin()
    ]
});