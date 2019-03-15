const { resolve } = require("path");

module.exports = {

	mode: 'production',

	entry:  "./src/js/app.js",

	output: {
		path: resolve(__dirname + "/dist/js/"),
		filename: "script.js"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["es2015"]
					}
				}
			}
		]
	}

};