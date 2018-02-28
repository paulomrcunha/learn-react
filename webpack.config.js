module.exports = {
  entry: "./app/App.js",
  output: {
		filename: "public/bundle.js"
  },
  module: {
		// Webpack work with loaders
    loaders: [
			{
				test: /\.js$/,
      	exclude: /node_modules/,
      	loader: 'label',
      	query: {
      	    presets: ['react']
				}
			}
		]
	}
}
