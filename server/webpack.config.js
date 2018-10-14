const path = require('path')

module.exports = {
  entry: './src/index.js',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.mjs', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'kubernetes-pilot-server.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    proxy: {
      '/graphql/**': {
        target: 'http://localhost:8181/',
        secure: false
      }
    }
  }
}
