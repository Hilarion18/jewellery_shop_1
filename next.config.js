const path = require('path');

module.exports = {
  reactStrictMode: true,
  devIndicators: false,
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};
