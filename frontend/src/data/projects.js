const imagePath = (filename) => `${import.meta.env.BASE_URL}img/${filename}`;

export const projects = [
	{
		id: 'word-jumbler',
		title: 'Word Jumbler Game',
		category: 'Group Project',
		description:
			'A word game where players rearrange letters to find the correct answer.',
		image: imagePath('word-jumbler-1.PNG'),
		imageAlt: 'Word Jumbler game with an answer panel and chat box',
		screenshots: [
			imagePath('word-jumbler-1.PNG'),
			imagePath('word-jumbler.PNG'),
		],
		featured: true,
	},
	{
		id: 'gomoku-ai',
		title: 'GOMOKU-AI',
		category: 'Group Project · Rust Programming',
		description:
			'A Gomoku game with options to play against an AI or another player.',
		image: imagePath('gomoku.PNG'),
		imageAlt: 'Rust Gomoku board with player and game controls',
		screenshots: [imagePath('gomoku.PNG'), imagePath('gomoku1.PNG')],
		featured: true,
	},
	{
		id: 'open-data-validation',
		title: 'Validates Submitted Datasets',
		category: 'Group Project · Portland Open Data',
		description:
			'A web portal that checks submitted datasets against a standard format and reports validation errors.',
		image: imagePath('validate-data-1.PNG'),
		imageAlt: 'Portland Open Data dataset validation interface',
		screenshots: [
			imagePath('validate-data-1.PNG'),
			imagePath('validate-data-2.PNG'),
			imagePath('validate-data-3.PNG'),
		],
		featured: true,
	},
	{
		id: 'commercial-website',
		title: 'Commercial Website',
		category: 'Personal Project',
		description:
			'A frontend commercial website built with HTML, SCSS, JavaScript, and jQuery.',
		image: imagePath('riode-web.PNG'),
		imageAlt: 'Riode commercial website homepage',
		screenshots: [
			imagePath('riode-web.PNG'),
			imagePath('riode-web2.PNG'),
			imagePath('riode-web3.PNG'),
		],
		featured: true,
	},
	{
		id: 'currency-converter',
		title: 'Currency Converter',
		category: 'Group Project · Frontend Course',
		description:
			'A dashboard for converting currencies and cryptocurrencies and tracking changes over time.',
		image: imagePath('currency-exchange-1.PNG'),
		imageAlt: 'Currency Converter homepage with a banknote world map',
		screenshots: [
			imagePath('currency-exchange-1.PNG'),
			imagePath('currency-exchange-2.PNG'),
			imagePath('currency-exchange-3.PNG'),
		],
		featured: false,
	},
	{
		id: 'book-application',
		title: 'Book Application',
		category: 'Personal Project',
		description:
			'A backend application built with Node.js, Express, and MongoDB, supporting user authentication and book management.',
		image: imagePath('book-app-1.PNG'),
		imageAlt: 'Book application records displayed in MongoDB Compass',
		screenshots: [imagePath('book-app-1.PNG'), imagePath('book-app-2.PNG')],
		featured: false,
	},
];
