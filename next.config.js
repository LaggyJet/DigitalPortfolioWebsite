const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';
const basePath = isGithubPages ? '/DigitalPortfolioWebsite' : '';

module.exports = {
    output: 'export',
    basePath,
    assetPrefix: basePath,
    images: { unoptimized: true },
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
};
