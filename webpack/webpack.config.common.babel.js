import os from 'os';
import path from 'path';
import webpack from 'webpack';
import ConcatPlugin from 'webpack-concat-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

/**
 * Constants
 *
 * @author Tameem Safi <t.safi@kainos.com>
 * @since 1.2.0
 */
const config = {
  paths: {
    scss: path.resolve('src', 'assets', 'scss'),
    js: path.resolve('src', 'assets', 'js'),
    fonts: path.resolve('src', 'assets', 'fonts'),
    images: path.resolve('src', 'assets', 'img'),
    misc: path.resolve('src', 'assets', 'misc'),
    gdsOnly: path.resolve('src', 'govuk-frontend_3-10-0', 'govuk')
    /*newGDSJS: path.resolve('src', 'govuk-frontend', 'src', 'govuk'),*/
    /*tfsJS: path.resolve('src', 'assets', 'js')*/
    /*mtsPublicAssets: path.join(os.homedir(), 'MOTDEV', 'mot', 'mot-web-frontend', 'public', 'assets'),
    mothPublicAssets: path.join(os.homedir(), 'MOTDEV', 'moth-application', 'PhpWebUI', 'public', 'assets'),
    manuals3456Assets: path.join(os.homedir(), 'MOTDEV', 'mot-manuals-transformer', 'manuals', 'class3457', 'assets'),
    manuals12Assets: path.join(os.homedir(), 'MOTDEV', 'mot-manuals-transformer', 'manuals', 'class12', 'assets'),*/
  }
};

/**
 * Checks environment variable to see if we are in production mode
 *
 * @returns {Boolean} true if we are in production and false otherwise
 *
 * @author Tameem Safi <t.safi@kainos.com>
 * @since 1.2.0
 */
const isProduction = () => {
  return process.env.NODE_ENV === 'production';
};

/**
 * Get the extract text plugin loader settings based on environment
 *
 * @returns A webpack loader array
 *
 * @author Tameem Safi <t.safi@kainos.com>
 * @since 1.2.0
 */
const getExtractTextPluginLoaders = () => {
  let postCSSPlugins = [
    require('autoprefixer')({
      browsers: [
        "ie 8",
        "ie 9",
        "ie 10",
        "ie 11",
        "last 2 versions"
      ]
    })
  ];

  if(isProduction()) {
    postCSSPlugins.push(require('cssnano')({
      preset: 'advanced',
      minifyFontValues: false
    }));
  }

  return ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader',
        options: {
          url: false,
          sourceMap: !isProduction()
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: !isProduction(),
          plugins: postCSSPlugins,
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: !isProduction(),
        }
      },
    ]
  })
};

/**
 * Get settings for copying files
 *
 * @returns array containing all settings
 *
 * @author Tameem Safi <t.safi@kainos.com>
 * @since 1.2.2
 */
const getCopyWebpackPluginSettings = () => {
  let copyWebpackPluginSettings = [
    new CopyWebpackPlugin([
      {
        context: path.resolve(config.paths.fonts),
        from: '**/*',
        to: '../fonts'
      },
      {
        context: path.resolve(config.paths.images),
        from: '**/*',
        to: '../images',
      },
      {
        context: path.resolve(config.paths.misc),
        from: '**/*',
        to: '../misc'
      }
    ])
  ];

  // Check environment variable

  // to copy govuk node package to local
  if(process.env.COPY_GOVUK_PACKAGE) {
    copyWebpackPluginSettings.push(new CopyWebpackPlugin([
      {
        context: path.resolve('./node_modules/govuk-frontend/'),
        from: '**/*',
        to: path.resolve('./src/govuk-frontend_3-10-0/'),
        force: true,
      }
    ]));
  }

  // to copy govuk stuff to relevant folders
  if(process.env.COPY_GOVUK_NJK) {
    copyWebpackPluginSettings.push(new CopyWebpackPlugin([
      {
        context: path.resolve('./src/govuk-frontend_3-10-0/govuk/components'),
        from: '**/*.njk',
        to: path.resolve('./src/server/views/macros/new-gds'),
        force: true,
      },
      {
        context: path.resolve('./src/govuk-frontend_3-10-0/govuk/assets/fonts'),
        from: '**/*',
        to: path.resolve('./src/assets/fonts/'),
        force: true,
      },
      {
        context: path.resolve('./src/govuk-frontend_3-10-0/govuk/assets/fonts'),
        from: '**/*',
        to: path.resolve('./public/fonts/'),
        force: true,
      }/*,
      {
        context: path.resolve('./src/govuk-frontend/dist'),
        from: 'govuk-frontend-3.9.1.min.js',
        to: path.resolve('./public/javascripts/'),
        force: true,
      },
      {
        context: path.resolve('./src/govuk-frontend/dist'),
        from: 'govuk-frontend-3.9.1.min.js',
        to: path.resolve('./dist/javascripts/'),
        force: true,
      }*/
    ]));
  }

  // to copy public assets to mts

  // TAKEN FROM package.json
  /*"start-dev:copy-to-mts": "cross-env COPY_TO_MTS=true npm run start-dev",
    "start-dev:copy-to-moth": "cross-env COPY_TO_MOTH=true npm run start-dev",
    "start-dev:copy-to-manuals": "cross-env COPY_TO_MANUALS=true npm run start-dev",*/

 /* if(process.env.COPY_TO_MTS) {
    copyWebpackPluginSettings.push(new CopyWebpackPlugin([
      {
        context: path.resolve('public'),
        from: '**!/!*',
        to: config.paths.mtsPublicAssets,
        force: true,
      }
    ]));
  }*/
  // Check environment variable
  // to copy public assets to moth
  /*if(process.env.COPY_TO_MOTH) {
    copyWebpackPluginSettings.push(new CopyWebpackPlugin([
      {
        context: path.resolve('public'),
        from: '**!/!*',
        to: config.paths.mothPublicAssets,
        force: true,
      }
    ]));
  }*/

  // Check environment variable
  // to copy public assets to manuals
  /*if(process.env.COPY_TO_MANUALS) {
    // Class 3457
    copyWebpackPluginSettings.push(new CopyWebpackPlugin([
      {
        context: path.resolve('public'),
        from: '**!/!*',
        to: config.paths.manuals3456Assets,
        force: true,
      }
    ]));

    // Class 12
    copyWebpackPluginSettings.push(new CopyWebpackPlugin([
      {
        context: path.resolve('public'),
        from: '**!/!*',
        to: config.paths.manuals12Assets,
        force: true,
      }
    ]));
  }*/

  return copyWebpackPluginSettings;
}

/**
 * Webpack configuration
 *
 * @author Tameem Safi <t.safi@kainos.com>
 * @since 1.2.0
 */
export default {
  entry: {
    /*'dvsa': path.resolve(config.paths.js, 'dvsa', 'index.js'),*/
    /*'dvsa-manuals': path.resolve(config.paths.js, 'dvsa-manuals', 'tfs.js'),
    'dvsa-mts': path.resolve(config.paths.js, 'dvsa-mts', 'tfs.js'),
    'dvsa-mts-legacy': path.resolve(config.paths.js, 'dvsa-mts-legacy', 'tfs.js'),*/
    'development': path.resolve(config.paths.js, 'development', 'index.js'),
    /*'default-gds' : path.resolve('./src/govuk-front-end/src/govuk/', 'all.js'),*/
    /*'default-gds' : path.resolve(config.paths.newGDSJS, '', 'all.js'),*/
    /*'tfs-js' : path.resolve(config.paths.tfsJS, 'tfs', 'index.js'),*/
    'styles': path.resolve(config.paths.scss, 'styles.scss'),
    'gdsOnly': path.resolve(config.paths.gdsOnly, 'all.scss')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!@dvsa\/cookie-manager).*/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['env', {
                'targets': {
                  'browsers': [
                    'last 3 versions',
                    'ie >= 9',
                    'last 3 iOS major versions',
                    'ff >= 33',
                    'safari >= 9'
                  ]
                },
                debug: true,
                useBuiltIns: true,
                uglify: true
              }],
              'stage-2',
              'stage-3'
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: getExtractTextPluginLoaders(),
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: 2
    }),
    new ConcatPlugin({
      name: 'ie-shims',
      fileName: 'ie-shims.js',
      filesToConcat: [
        path.resolve(config.paths.js, 'ie-shims', 'ie.js'),
        path.resolve(config.paths.js, 'ie-shims', 'html5.js'),
        path.resolve(config.paths.js, 'ie-shims', 'mediaqueries.js')
      ],
      uglify: {
        ie8: true
      }
    }),
    new ExtractTextPlugin({
      filename: '../stylesheets/[name].css'
    }),
    ...getCopyWebpackPluginSettings()
  ]
};
