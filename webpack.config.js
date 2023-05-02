const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const source = path.resolve(__dirname, "src");

module.exports = ({ development }) => ({
  entry: `${source}/index.ts`,
  devtool: development ? "inline-source-map" : false,
  mode: development ? "development" : "production",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryExport: "default",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "typeof self === 'undefined' ? this : self"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: source,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file-loader" },
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
      {
        test: /\.(ts|tsx)$/,
        include: source,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"]
      }
    ]
  },
  plugins: [new ESLintPlugin({ extensions: ["ts"] }),   new CopyPlugin({
    patterns: [
      { from: "./src/scss", to: "scss" },
      { from: "./src/index.scss", to: "index.scss" },
    ],
  }),]
});
