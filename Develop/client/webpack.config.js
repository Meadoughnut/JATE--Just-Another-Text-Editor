const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      // Define entry points for main app and install script
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      // Output bundled files to the 'dist' folder
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Generates an HTML file that includes the bundled files
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Just Another Text Editor',
      }),

      // Inject custom service worker into the generated bundle
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'service-worker.js',
      }),

      // Create a manifest file for the PWA
      new WebpackPwaManifest({
        fingerprints: false,  // Disable fingerprinting for consistent file names
        name: 'Just Another Text Editor',
        short_name: 'JATE',
        description: 'An offline-capable text editor',
        background_color: '#272822',
        theme_color: '#31a9e1',
        start_url: './',
        publicPath: './',
        icons: [
          {
            // Define sizes for the app's icon
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],

    module: {
      rules: [
        // Add rules to handle CSS files
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        // Add Babel loader for transpiling modern JavaScript
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'], // Preset to convert ES6+ to ES5
            },
          },
        },
      ],
    },
  };
};
