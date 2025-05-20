const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';
const basePathValue = isGithubPages ? '/DigitalPortfolioWebsite' : '';

module.exports = {
    output: 'export',
    basePath: basePathValue,
    assetPrefix: basePathValue,
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: basePathValue,
    },
};
