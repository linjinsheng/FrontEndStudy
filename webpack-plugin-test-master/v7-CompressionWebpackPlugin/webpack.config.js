var webpack = require("webpack");

const CompressionPlugin = require("compression-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	plugins: [
		new CompressionPlugin(),
		new HtmlWebpackPlugin()
	]
};