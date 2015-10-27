module.exports = {
  devtool: "source-map",
  entry: './examples/react-router/js/main.js',
  output: {
    filename: 'bundle.js',
    path: './examples/react-router/public/',
    publicPath: 'public'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};
