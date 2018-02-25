
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle/index.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }


}