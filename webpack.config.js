const CopyPlugin = require("copy-webpack-plugin");

module.exports = (_, configuration) => ({
  entry: './src/index.js',
  resolve: { extensions: ['.js', '.jsx'] },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/inline'
      },
      {
        test: /\.(ico|favicon)$/i,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public" },
      ],
    }),

  ],
  devServer: configuration.mode === 'development' ? {
    static: {
      directory: './dist',
    },
    compress: true,
    port: 8081,
  } : undefined,
});
