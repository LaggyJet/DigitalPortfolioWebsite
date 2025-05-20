const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';

module.exports = {
    output: 'export',
    basePath: isGithubPages ? '/DigitalPortfolioWebsite' : '',
    assetPrefix: isGithubPages ? '/DigitalPortfolioWebsite/' : '',
    images: { unoptimized: true },
};