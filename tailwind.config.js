module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            height: theme => ({
                "h-screen/2": "50vh",
                "h-screen/3": "calc(100vh / 3)",
                "2h-screen/3": "calc(100vh * 2 / 3)",
                "h-screen/4": "calc(100vh / 4)",
                "3h-screen/4": "calc(100vh * 3 / 4)",
                "h-screen/5": "calc(100vh / 5)",
              }),
        },
    },
    plugins: [],
};