/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  swcMinify: true,
  compress:true,
  styledComponents: true,
  i18n: {
    locales: ['pl'],
    defaultLocale: 'pl',
  },
};

module.exports = nextConfig;
