/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  i18n,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
