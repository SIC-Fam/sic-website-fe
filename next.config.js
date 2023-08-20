/** @type {import('next').NextConfig} */

const path = require('path');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig: {
    BASE_API: process.env.BASE_API,
  },
  i18n
};

module.exports = nextConfig;
