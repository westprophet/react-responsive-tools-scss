const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const source = path.resolve(__dirname, "src");

module.exports = ({ development }) => ({
  entry: `${source}/index.js`,
  devtool: development ? "inline-source-map" : false,
  mode: development ? "development" : "production",
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   include: source,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader"
      //   }
      // },
      { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
      // {
      //   test: /\.(ts|tsx)$/,
      //   include: source,
      //   exclude: /node_modules/,
      //   use: ["ts-loader"]
      // }
    ]
  },
  plugins: [ new CopyPlugin({
    patterns: [
      { from: "./src/scss", to: "scss" },
      { from: "./src/index.scss", to: "index.scss" },
      { from: "./src/reset.scss", to: "reset.scss" },
      { from: "./package.json", to: "package.json" },
      { from: "./README.md", to: "README.md" },
      { from: "./LICENSE.md", to: "LICENSE.md" },
    ],
  }),]
});
