import path from 'path'
import webpack from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

export default {
  mode: 'production',
  output: {
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
    plugins: [new TsconfigPathsPlugin()],
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }]
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `
            @import "src/assets/styles/_variables.scss";
            @import "src/assets/styles/_animations.scss";
            @import "src/assets/styles/mixins";
          `
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: './index.html'
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ]
}
