var webpack = require("webpack");

module.exports = {
	entry: {
		vendor: ["jquery", "other-lib"],
		app: "./entry"
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			// filename: "vendor.js"
			// (给 chunk 一个不同的名字)
	
			minChunks: Infinity,
			// (随着 entry chunk 越来越多，
			// 这个配置保证没其它的模块会打包进 vendor chunk)
		})
	]
};