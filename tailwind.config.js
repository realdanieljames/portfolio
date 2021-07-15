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
                main_container_cream: {
                    // DEFAULT: "#E5E1D7"
                    DEFAULT: "#FEFEF9"
                },
                sidebar_blue: {
                    DEFAULT: "#CEEFFF"
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}