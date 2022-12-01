module.exports = {
    entry: './src/index.js',
    devtool: false,
    output: {
      filename: 'app.js',
    },
    devServer: {
      historyApiFallback: true,
      devMiddleware: {
        writeToDisk: true,
      },
      port: 4000,
    },
    module: {
      rules: [        
        {
            test: /\.html$/,
            type: 'asset/resource',
            generator: {
                filename: '[name][ext]'
            },
        },
        {
            test: /\.ico$/,
            type: 'asset/resource',
            generator: {
                filename: 'images/[name].ico'
            },
        },
      ],
    },
  };