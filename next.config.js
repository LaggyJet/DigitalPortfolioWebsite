const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    output: 'export',
    basePath: isProd ? '/DigitalPortfolioWebsite' : '',
    assetPrefix: isProd ? '/DigitalPortfolioWebsite/' : '',
    images: { unoptimized: true },
};