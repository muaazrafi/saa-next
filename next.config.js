const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  images: {
    domains: ['s3.amazonaws.com', 'saastaging.s3.amazonaws.com', 'd1d0zx56gx2nys.cloudfront.net'],
  },
  webpack: (config) => {
    // HOTFIX: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      })
    );
    config.resolve.modules.push(__dirname);

    return config;
  },
  env: {
    stripePubKey: process.env.STRIPE_PUBLIC_KEY,
    googleApiKey: process.env.GOOGLE_API_KEY,
    autcompleteGoogleURL: process.env.REACT_APP_GOOGLE_MAP_API_KEY
  },
  publicRuntimeConfig: {
    stripePubKey: process.env.STRIPE_PUBLIC_KEY,
    googleApiKey: process.env.GOOGLE_API_KEY,
    autcompleteGoogleURL: process.env.REACT_APP_GOOGLE_MAP_API_KEY
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
  url: 'https://sentry.studyabroadapartments.com',
  authToken: '184b551e44604c358fcba14f61420ae2',
  project: '3'
};

const moduleExports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
      },
    ],
    [withBundleAnalyzer],
  ],
  nextConfig
);


module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
