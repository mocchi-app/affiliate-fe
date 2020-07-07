const path = require('path');
require('dotenv').config();

module.exports = {
  env: {
    API_AFFILIATE: 'http://64.225.118.43:8090',
  },
  webpack: (config) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['styles'] = path.join(__dirname, 'styles');
    config.resolve.alias['public'] = path.join(__dirname, 'public');

    return config;
  },
};
