const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const isProduction = process.env.NODE_ENV !== "development";
const PORT = process.env.PORT || 3000;
const mode = isProduction ? "production" : "development";

module.exports = {
  mode: mode,
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "./build",
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": `http://localhost:${PORT}`
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  devtool: "inline-source-map",
  plugins: [
    new CopyWebpackPlugin([
      { from: "src/index.html" },
      { from: "src/assets/favicon.ico" }
    ]),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      root: "./src",
      actions: path.resolve(__dirname, "./src/actions"),
      assets: path.resolve(__dirname, "./src/assets"),
      atoms: path.resolve(__dirname, "./src/components/atoms"),
      components: path.resolve(__dirname, "./src/components"),
      config: path.resolve(__dirname, "./src/config"),
      containers: path.resolve(__dirname, "./src/containers"),
      constants: path.resolve(__dirname, "./src/constants"),
      helpers: path.resolve(__dirname, "./src/helpers"),
      molecules: path.resolve(__dirname, "./src/components/molecules"),
      organisms: path.resolve(__dirname, "./src/components/organisms"),
      routes: path.resolve(__dirname, "./src/routes"),
      reducers: path.resolve(__dirname, "./src/reducers"),
      sagas: path.resolve(__dirname, "./src/sagas"),
      store: path.resolve(__dirname, "./src/store"),
      theme: path.resolve(__dirname, "./src/theme"),
      views: path.resolve(__dirname, "./src/components/views")
    }
  }
};
