let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
    .setPublicPath('public/')
    .webpackConfig({
        module: {
            rules: [
                {
                    test: /\.(jsx|js)$/,
                    // loader: 'eslint-loader',
                    // enforce: 'pre',
                    exclude: /(node_modules)/,
                    // options: {
                    //     formatter: require('eslint-friendly-formatter')
                    // }
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
    .version();
