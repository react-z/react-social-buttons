module.exports = {
  devtool: "source-map",
  entry: './examples/simple/js/main.js',
  output: {
    filename: 'bundle.js',
    path: './examples/simple/public/',
    publicPath: 'public'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};
