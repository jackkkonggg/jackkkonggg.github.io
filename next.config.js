const IS_PROD = process.env.NODE_ENV === 'production';
const GITHUB_REPO_NAME = 'personal-portfolio';

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: IS_PROD ? `/${GITHUB_REPO_NAME}/` : '',
};
