const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const glob = require('glob')

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'assets'),
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'assets/dist'),
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new ImageminPlugin({
            externalImages: {
                context: '.',
                sources: glob.sync(
                    'assets/src/images/**/*.{png, jpg, jpeg, gif, svg}'
                ),
                destination: 'assets/dist/images',
                fileName: '[name].[ext]',
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 'style-loader', // this default loader causes styles to "flicker" on reload - don't use it
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('tailwindcss'),
                                    require('autoprefixer'),
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
}
