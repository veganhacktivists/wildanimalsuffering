module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx,css}'],
	theme: {
		extend: {
			height: (theme) => ({
				'h-screen/2': '50vh',
				'h-screen/3': 'calc(100vh / 3)',
				'2h-screen/3': 'calc(100vh * 2 / 3)',
				'h-screen/4': 'calc(100vh / 4)',
				'3h-screen/4': 'calc(100vh * 3 / 4)',
				'h-screen/5': 'calc(100vh / 5)',
			}),
			colors: {
				'menu-front': { dark: '#A29D8B', light: '#ADA999' },
				'menu-back': {
					dark: '#9F9F9F',
					light: '#F4F4F4',
				},
			},
			backgroundImage: {
				logo: 'url("../assets/images/logo.png")',
				'icon-close': 'url("../assets/images/close.svg")',
			},
			fontFamily: {
				heavy: ['The Bold Font'],
			},
		},
	},
	plugins: [],
};
