var webpack = require("webpack");

module.exports = {
	plugins: [
		new webpack.BannerPlugin({
			banner:
				"fullhash:[fullhash], chunkhash:[chunkhash], name:[name], base:[base], query:[query], file:[file], path:[path], ext:[ext]"
		})
	]
};