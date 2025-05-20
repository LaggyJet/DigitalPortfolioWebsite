const repoName = 'DigitalPortfolioWebsite';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubActions ? `/${repoName}` : '';
const assetPrefix = isGithubActions ? `/${repoName}/` : './';

module.exports = {
    output: 'export',
    basePath: basePath,
    assetPrefix: assetPrefix,
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
};
