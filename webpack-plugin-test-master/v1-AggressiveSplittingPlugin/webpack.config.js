var webpack = require("webpack");

module.exports = {
	plugins: [
		new webpack.optimize.AggressiveSplittingPlugin({
			minSize: 1,
			maxSize: 1
		})
	]
};