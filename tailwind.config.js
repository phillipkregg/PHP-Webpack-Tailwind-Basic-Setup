module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tailwindcss-inset')({
            variants: ['responsive'], // default: []
            insets: {
                '1/2': '50%',
                full: '100%',
            },
        }),
    ],
}
