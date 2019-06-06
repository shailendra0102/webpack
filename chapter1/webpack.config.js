const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
    ExtractTextPlugin = require('extract-css-chunks-webpack-plugin');
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // entry: {
    //     app: ['./src/App.tsx'],
    //     vendor: ['react', 'react-dom']
    // },
    entry: './src/App.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    // optimization: {
    //     // runtimeChunk: 'single',
    //     splitChunks: {
    //       chunks: 'all',
    //     },
    // },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                    loader:ExtractTextPlugin.loader,
                    options: {
                      hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
                      reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
                    }
                  },
                  "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
        new ExtractTextPlugin({filename: "styles.css"}),
        new BundleAnalyzerPlugin()
    ]
  };