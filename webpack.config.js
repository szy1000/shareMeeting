const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports ={
  entry: './src/index.js',
  mode: 'production',
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 8888,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  performance: { hints: false },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.tsx','.ts','.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, './src'),
        options: {
          presets: ['@babel/preset-env', "@babel/preset-react"]
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello webpack',
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ]
}
