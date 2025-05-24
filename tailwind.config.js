module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            transitionDuration: {
                '250': '250ms',
            },
            minHeight: {
                'screen-svh': '100svh',
            },
        },
    },
    plugins: [],
};