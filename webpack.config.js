module.exports = {
    mode: 'production',
    entry:  './wrapper.js',
    output: {
        libraryTarget: 'var',
        library: 'showGoodApp',
        filename: 'calculator.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "css-loader",
                    options: {
                        url: false
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    limit: 10240,
                    name: '[name].[ext]'
                }
            }
        ]
    }
};