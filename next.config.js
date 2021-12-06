const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const nextConfig = {
  env: {
    GOOGLE_API_KEY: 'AIzaSyCmM0r8-DP62TVgH4dDliJko9CMMmGoHKc',
    REACT_APP_GOOGLE_MAP_API_KEY:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCmM0r8-DP62TVgH4dDliJko9CMMmGoHKc&libraries=geometry,drawing,places',
    SERVER_API: `https://saa-next.vercel.app`,
  },
  images: {
    domains: ['s3.amazonaws.com'],
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
  ],
  nextConfig
);
