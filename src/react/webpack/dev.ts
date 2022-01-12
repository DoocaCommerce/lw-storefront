import webpackMerge from 'webpack-merge'

export function createDevConfig() {
  const path = require('path')
  const webpack = require('webpack')
  const HtmlWebPackPlugin = require('html-webpack-plugin')
  const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

  return webpackMerge(
    {},
    {
      devtool: 'source-map',
      mode: 'development',
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
          '@components': path.resolve(process.cwd(), 'src/components'),
          '@assets': path.resolve(process.cwd(), 'src/assets'),
          '@config': path.resolve(process.cwd(), 'src/config'),
          '@pages': path.resolve(process.cwd(), 'src/pages'),
          '@hooks': path.resolve(process.cwd(), 'src/hooks'),
          '@common': path.resolve(process.cwd(), 'src/common')
        },
        plugins: [new TsconfigPathsPlugin()],
        modules: [path.resolve(process.cwd(), 'src'), path.resolve(process.cwd(), 'node_modules')]
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
          template: path.join(process.cwd(), 'src', 'index.html'),
          filename: './index.html'
        }),
        new webpack.ProvidePlugin({
          React: 'react',
          ReactDOM: 'react-dom'
        })
      ]
    }
  )
}
