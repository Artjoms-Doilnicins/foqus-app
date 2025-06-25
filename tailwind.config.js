module.exports = {
    content: ['./*.html', './js/*.js'],
    // darkMode: 'selector',
    darkMode: 'class',
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1020px',
            xl: '1440px',
        },
        extend: {
            colors: {
                myPurple: '#BF00FF',
                myDarkerPurple: '#600080',
                myLightGray: '#ded6f0',
                myDarkGray: '#767676',
                myBlack: '#17191A',
            },
            fontFamily: {
                sans: ['Rubik', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
