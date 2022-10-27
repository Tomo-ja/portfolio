const projectsData = [
	{
		imgUrl: '/bookOnlineStore.png',
		githubUrl: 'https://github.com/Tomo-ja/Book-store',
		productUrl: 'http://ookstore-20221014214828-hostingbucket-dev.s3-website.ca-central-1.amazonaws.com/',
		title: 'Book Store',
		description: [
			'Simple E-commas site for book lover. You can see books, add to shopping cart, checkout, and payment.',
			'Using Amplify as backend and Stripe as payment service makes this application actually works. Hidden path /admin allows book store owner to upload new book within the app.'
		],
		envList: ['React', 'Typescript', 'AWS - Amplify']
	},
	{
		imgUrl: '/cookitApp.png',
		githubUrl: 'https://github.com/Tomo-ja/cook-friends',
		productUrl: 'https://cook-friends.vercel.app/',
		title: 'Cookit',
		description: [
			'Full stack cooking helper application. Browse recipes, managing Fridge, and Shopping efficient all in one this app',
			'This is team project with one of my awesome classmate. Through this app, I gained a lot of soft skills as a team member as well as hard skills.'
		],
		envList: ['Next.js', 'Typescript', 'MongoDB', 'Styled Component']
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
		productUrl: null,
		title: 'Expense Tracker',
		description: [
			'Full stack application where you can track your income/expense visually by graphs. I was in charge of all frontend site to actually use Python program which is developed by my friend.',
			'First time to use Typescript, Tailwind for design, and Redux for managing state build up my another frontend skills a lot.'
	],
		envList: ['React', 'Typescript', 'Tailwind', 'Redux']
	},
	{
		imgUrl: '/cryptoApp.png',
		githubUrl: 'https://github.com/Tomo-ja/crypto-app',
		productUrl: null,
		title: 'Crypto App',
		description: [
			'Crypto information app for investors to track and see them at once provided by Coinranking.',
			'Leaning Redux Toolkit allows me to fetch api data simple and easy to maintain. I used combination of Ant Design for design structure and pure css for details to make app fast.'
	],
		envList: ['React', 'Typescript', 'Redux Toolkit', 'Ant Design', 'Chart js']
	},
	{
		imgUrl: '/wordleCopy.png',
		githubUrl: 'https://github.com/Tomo-ja/wordle-copy',
		productUrl: 'https://tomo-ja.github.io/wordle-copy/',
		title: 'Wordle Copy',
		description: [
			'Copy of actual web game Wordle. I developed this entire game using pure HTML, css, and Javascript without any other framework.',
			'Simple application without backend, yet, I hope you can find how I think logically to make this run.'
		],
		envList: ['HTML', 'CSS', 'JavaScript']
	},
	{
		imgUrl: '/weatherApp.png',
		githubUrl: 'https://github.com/Tomo-ja/weather-app',
		productUrl: null,
		title: 'Weather app',
		description: [
			'Traditional weather application using React for first time, for me. You can see real/future time weather information provided by Open Weather api.',
			'User can register favorite cities for the next time, which will be stored on local storage of browser.'
		],
		envList: ['React', 'CSS', 'JavaScript']
	},
	{
		imgUrl: '/stackGame.png',
		githubUrl: 'https://github.com/Tomo-ja',
		productUrl: 'https://tomo-ja.github.io/stack-game/',
		title: 'Stack game',
		description: [
			'First school project after learn basic HTML, CSS, JavaScript. User will try to pile 2D box as high as they can pressing keyboard S in a different mode.',
			'They will beat old record they made in a same mode.'
		],
		envList: ['HTML', 'CSS', 'JavaScript']
	},
	{
		imgUrl: '/blackJack.png',
		githubUrl: 'https://github.com/Tomo-ja/BlackJack',
		productUrl: null,
		title: 'Black Jack',
		description: [
			'First application build by Ruby on Rails. Single user can play black jack game with computer.'
		],
		envList: ['Ruby on Rails', 'CSS',]
	},
]

export default projectsData