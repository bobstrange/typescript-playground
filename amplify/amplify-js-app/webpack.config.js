const CopyWebpackPlugin = require("copy-webpack-plugin")
const webpack = require("webpack")
const path = require("path")

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.{ts,tsx}$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    client: {
      overlay: true,
    },
    hot: true,
    watchFiles: ["src/*", "index.html"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: ["index.html"],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
