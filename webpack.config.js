//import path from 'path';
var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: "./src/index.js",
	output: {
		filename: "./bundle.js"
	},
	module: {
  	loaders: [
			{
      	test: /\.js$/,
      	exclude: /node_modules/,
      	loader: 'babel-loader',
      	query: {
        	presets: ['es2015', 'react']
      	}
    	},
			{
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
			{
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: 'url?name=[path][name].[ext]',
      },
			
    ]
  },
	watch: true
}