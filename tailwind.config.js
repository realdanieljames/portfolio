module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {

                heading_blue: {
                    DEFAULT: "#E4F6FF"
                },
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}