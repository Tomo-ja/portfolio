const projectsData = [
	{
		imgUrl: '/bookOnlineStore.png',
		githubUrl: 'https://github.com/Tomo-ja/Book-store',
		productUrl: 'http://ookstore-20221014214828-hostingbucket-dev.s3-website.ca-central-1.amazonaws.com/',
		title: 'Book Store',
		description: [
			'Simple E-commas site for book lover. You can see books, add to shopping cart, checkout, and payment',
			'Using Amplify as backend and Stripe as payment service makes this application actually works. Hidden path /admin allows book store owner to upload new book within the app.'
		],
		envList: ['React', 'Typescript', 'AWS - Amplify']
	},
	{
		imgUrl: '/cookitApp.png',
		githubUrl: 'https://github.com/Tomo-ja/cook-friends',
		productUrl: 'https://github.com/Tomo-ja',
		title: 'Cookit',
		description: [
			'Cooking helper application. You can browse many recipes, add to favorite list, store ingredients to cook a recipe. At a grocery shopping, you can see them and store to cloud fridge if you buy. Cloud fridge helps you to manage your cooking plan before ingredients expire.',
			'Because this is using free plan of spoonacular api, sometimes application display only sample data when it hit limitation.'
		],
		envList: ['Next.js', 'Styled Component']
	},
	{
		imgUrl: '/invoiceManager.png',
		githubUrl: 'https://github.com/Tomo-ja',
		productUrl: null,
		title: 'ios Invoice Manger',
		description: [
			'ios application synchronizes google calendar to send invoice to your customer. Based on the calendar data, app calculates payment, create customer info within the app, and you can send its pdf via email. Setting up auto mode allows user to send them without even open the app.',
			'I was a member of actual company for this this project voluntarily.'
	],
		envList: ['Swift', 'Google authentication']
	},
	{
		imgUrl: '/expenseTracker.png',
		githubUrl: 'https://github.com/yk-jp/expense-tracker-frontend',
		productUrl: 'https://github.com/Tomo-ja',
		title: 'Expense Tracker',
		description: ['This is short description of the app.'],
		envList: ['React', 'Typescript', 'Sass']
	},
	{
		imgUrl: '/cryptoApp.png',
		githubUrl: 'https://github.com/Tomo-ja/crypto-app',
		productUrl: null,
		title: 'Crypto App',
		description: ['Crypto information application. '],
		envList: ['React', 'Redux Toolkit', 'Ant Design', 'Chart js']
	},
	{
		imgUrl: '/wordleCopy.png',
		githubUrl: 'https://github.com/Tomo-ja/wordle-copy',
		productUrl: 'https://tomo-ja.github.io/wordle-copy/',
		title: 'Wordle Copy',
		description: ['This is short description of the app.'],
		envList: ['HTML', 'CSS', 'JavaScript']
	},
	{
		imgUrl: '/weatherApp.png',
		githubUrl: 'https://github.com/Tomo-ja/weather-app',
		productUrl: null,
		title: 'Weather app',
		description: ['This is short description of the app.'],
		envList: ['React', 'CSS', 'JavaScript']
	},
	{
		imgUrl: '/stackGame.png',
		githubUrl: 'https://github.com/Tomo-ja',
		productUrl: 'https://tomo-ja.github.io/stack-game/',
		title: 'Stack game',
		description: ['This is short description of the app.'],
		envList: ['HTML', 'CSS', 'JavaScript']
	},
	{
		imgUrl: '/blackJack.png',
		githubUrl: 'https://github.com/Tomo-ja',
		productUrl: null,
		title: 'Black Jack',
		description: ['This is short description of the app.'],
		envList: ['Ruby on Rails', 'CSS',]
	},
]

export default projectsData