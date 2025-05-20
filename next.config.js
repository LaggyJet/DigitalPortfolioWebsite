const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES'
const basePath = isGithubPages ? '/DigitalPortfolioWebsite' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath + '/',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

module.exports = nextConfig
