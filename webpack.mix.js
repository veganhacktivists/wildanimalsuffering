let mix = require('laravel-mix');

require('laravel-mix-workbox');

const tailwindcss = require('tailwindcss');

mix
	.setPublicPath('public/')
	.webpackConfig({
		module: {
			rules: [
				{
					test: /\.(jsx|js)$/,
					exclude: /(node_modules)/
				}
			]
		},
	})
	.options({
		hmrOptions: {
			port: 3000
		}
	})
	.sass('src/index.scss', '/')
	.options({
		postCss: [ tailwindcss('./tailwind.config.js') ],
	})
	.js('src/index.js', '/index.js').react()
	.copy('assets/icons', './public/images/icons/')
	.generateSW()
	.version();
