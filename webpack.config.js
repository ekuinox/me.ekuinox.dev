const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const env = process.env.WEBPACK_ENV == undefined ? 'development' : process.env.WEBPACK_ENV

module.exports = {
	mode: env,
	devtool: env == 'development' ? "inline-source-map" : undefined,
	entry: './src/Index.tsx',
	output: {
		path: `${__dirname}/dist`,
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.css$/,
			loader: ['style-loader', 'css-loader']
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "ekuinox's home page",
			inject: false,
			template: "./src/index.html"
		}),
		new CopyWebpackPlugin([
			{from: './src/.well-known', to: '.well-known'},
			{from: './static/_redirects', to: './'}
		])
	],
	devServer: {
		historyApiFallback: true,
		host: '0.0.0.0'
	}
}
