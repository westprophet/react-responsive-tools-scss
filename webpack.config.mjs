import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const source = resolve(__dirname, 'src');

export default ({ development }) => ({
  entry: `${source}/index.ts`,
  devtool: development ? 'inline-source-map' : false,
  mode: development ? 'development' : 'production',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        include: source,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
        loader: 'file-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        include: source,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    // new ESLintPlugin({
    //   extensions: ['js', 'jsx', 'ts', 'tsx'],
    //   overrideConfigFile: resolve(__dirname, '.eslintrc.cjs'), // Указываем путь к конфигурации
    // }),
    new CopyPlugin({
      patterns: [
        // Копируем все файлы из src/scss в dist/scss
        { from: 'scss/**/*', to: 'scss/[name][ext]', context: source },
        // Копируем index в корень dist
        { from: 'index.scss', to: '[name][ext]', context: source },
        // Копируем scripts в dist/scripts
        { from: 'scripts/**/*', to: 'scripts/[name][ext]', context: source },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
});
