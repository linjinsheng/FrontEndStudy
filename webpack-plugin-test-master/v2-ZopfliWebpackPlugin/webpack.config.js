var webpack = require("webpack");
var ZopfliPlugin = require("zopfli-webpack-plugin");
module.exports = {
	plugins: [
		new ZopfliPlugin({
      asset: "[path].gz[query]",
      algorithm: "zopfli",
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    })
	]
};