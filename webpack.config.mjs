import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const source = resolve(__dirname, 'src');
const dist = resolve(__dirname, 'dist');

export default ({ development }) => ({
  entry: {}, // Пустой объект, так как мы не собираем JS файлы здесь
  devtool: development ? 'inline-source-map' : false,
  mode: development ? 'development' : 'production',
  output: {
    path: dist,
    filename: '[name].js', // Это поле нужно, но не будет использоваться
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
        use: 'file-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        include: source,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.jsx?$/,
        include: source,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'scripts/**/*', to: '[path][name][ext]', context: source }, // Копируем JS скрипты
        { from: 'scss/**/*', to: 'scss/[name][ext]', context: source }, // Копируем SASS файлы
        { from: 'index.scss', to: '[name][ext]', context: source }, // Копируем корневые SASS файлы
      ],
    }),
    new webpack.ProgressPlugin(),
  ],
  devServer: {
    static: {
      directory: dist,
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
});
