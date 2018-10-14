const path = require('path')

module.exports = {
  entry: './src/js/index.jsx',
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.css', '.scss', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'pilot-dashboard.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    proxy: {
      '/graphql': {
        target: `http://localhost:${process.env.PORT || 8181}/`,
        secure: false
      }
    }
  }
}
