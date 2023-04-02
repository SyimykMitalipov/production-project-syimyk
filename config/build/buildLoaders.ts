import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';



export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

      const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules : {
                auto: (resPath: string) => Boolean(resPath.includes(".module")),
                localIdentName: isDev 
                ? '[path][name]__[local]'
                 : '[hash:base64:8]'
              },
            }
          },
          // Translates CSS into CommonJS
          "sass-loader",
          // Compiles Sass to CSS
        ],
      }

    return [
        typescriptLoader,
        cssLoaders,
      ]
}