const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  env: {
    GOOGLE_API_KEY: 'AIzaSyAwOAW5fLXzdYo0RH11bA5wq2nQf2ZBec4',
    REACT_APP_GOOGLE_MAP_API_KEY:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAwOAW5fLXzdYo0RH11bA5wq2nQf2ZBec4&libraries=geometry,drawing,places',
  },
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

  },
  publicRuntimeConfig: {
    stripePubKey: process.env.STRIPE_PUBLIC_KEY,
  },
};

module.exports = withPlugins(
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
