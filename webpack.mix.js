const mix = require('laravel-mix'),
	tailwindcss = require('tailwindcss'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('laravel-mix-workbox');

mix
	.setPublicPath('public/')
	.webpackConfig({
		module: {
			rules: [
				{
					test: /\.(jsx|js)$/,
					exclude: /(node_modules)/,
				},
			],
		},

		output: {
			filename: '[name].[contenthash].js',
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: 'src/template.html',
			}),
			new MiniCssExtractPlugin({
				filename: '[name].[contenthash].css',
				chunkFilename: '[id].[contenthash].css',
			}),
		],
	})
	.options({
		hmrOptions: {
			port: 3000,
		},
	})
	.options({
		postCss: [tailwindcss('./tailwind.config.js')],
	})
	.js('src/index.js', '/index.js')
	.react()
	.copy('assets/icons', './public/images/icons/')
	.generateSW()
	.version();
