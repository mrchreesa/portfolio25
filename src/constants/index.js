export const navLinks = [
	{
		id: 1,
		name: "Home",
		href: "#home",
	},
	// {
	// 	id: 2,
	// 	name: "About",
	// 	href: "#about",
	// },
	{
		id: 3,
		name: "Projects",
		href: "#projects",
	},
	{
		id: 4,
		name: "Experience",
		href: "#experience",
	},
];

export const myProjects = [
	{
		title: "Student Performance Prediction",
		desc: "Developed a predictive machine learning model using Linear Regression to analyse student performance based on a Kaggle dataset with 15 different features, including study time, absences, and parental support.",
		subdesc: "Built with Python, Jupyter Notebook, Pandas, Scikit-learn, and Matplotlib to analyse and visualise data, ensuring accurate predictions and insights.",
		href: "https://github.com/mrchreesa/linear-regression/blob/main/student_pred.ipynb",
		texture: "/textures/project/linear2.mp4",
		logo: "/assets/icons/regression.jpg",
		spotlight: "/assets/spotlight3.png",
		logoStyle: {
			backgroundColor: "#112240",
			border: "0.2px solid #233554",
			boxShadow: "0px 0px 60px 0px #64ffda4d",
		},
		tags: [
			{ id: 1, name: "Python", path: "/assets/icons/python.png" },
			{ id: 2, name: "Jupyter Notebook", path: "/assets/icons/jupyter.png" },
			{ id: 3, name: "Pandas", path: "/assets/icons/pandas.png" },
			{ id: 4, name: "Scikit-learn", path: "/assets/icons/scikit.png" },
			{ id: 5, name: "Matplotlib", path: "/assets/icons/matplotlib.png" },
		],
		report: "/assets/Report.pdf",
	},

	{
		title: "Nutri-Tracker App",
		desc: "Nutri-Tracker enables users to search and track nutrition data for over 30,000 foods, featuring interactive nutrient graphs and profile-based tracking.",
		subdesc: "Built with React, Node.js, MongoDB, and CSS3, providing an intuitive interface and nutritional analysis.",
		href: "https://nutri-trackerr.vercel.app/",
		texture: "/textures/project/nutri.mp4",
		logo: "/assets/project-logo3.png",
		spotlight: "/assets/spotlight3.png",
		logoStyle: {
			backgroundColor: "#1C1A43",
			border: "0.2px solid #252262",
			boxShadow: "0px 0px 60px 0px #635BFF4D",
		},
		tags: [
			{ id: 1, name: "HTML", path: "/assets/icons/html.png" },
			{ id: 2, name: "CSS3", path: "/assets/icons/css3.png" },
			{ id: 3, name: "JavaScript", path: "/assets/icons/javascript.png" },
			{ id: 4, name: "React.js", path: "/assets/icons/react.png" },
			{ id: 5, name: "Node.js", path: "/assets/icons/node-js.png" },
			{ id: 6, name: "MongoDB", path: "/assets/icons/mongodb.png" },
		],
	},
	{
		title: "NFT Marketplace",
		desc: "A Web3 NFT marketplace featuring Metamask authentication, NFT minting, real-time bidding auctions, and smart contract-based secondary sales.",
		subdesc: "Built with Next.js, MongoDB, TailwindCSS, Infura, Ethers.js, and IPFS to ensure a seamless and decentralised user experience.",
		href: "https://new-elements-marketplace.vercel.app/",
		texture: "/textures/project/nft-marketplace1.mp4",
		logo: "/assets/project-logo1.png",
		spotlight: "/assets/spotlight1.png",
		logoStyle: {
			backgroundColor: "#1C1A43",
			border: "0.2px solid #252262",
			boxShadow: "0px 0px 60px 0px #635BFF4D",
		},
		tags: [
			{ id: 1, name: "HTML", path: "/assets/icons/html.png" },
			{ id: 2, name: "CSS3", path: "/assets/icons/css3.png" },
			{ id: 3, name: "JavaScript", path: "/assets/icons/javascript.png" },
			{ id: 4, name: "Next.js", path: "/assets/icons/nextjs-boilerplate-logo.png" },
			{ id: 5, name: "MongoDB", path: "/assets/icons/mongodb.png" },
			{ id: 6, name: "TailwindCSS", path: "/assets/icons/tailwind-css.png" },
		],
	},
	{
		title: "Counselling Site",
		desc: "A modern, bilingual website for a counselling firm, featuring a user-friendly contact form and an admin panel for blog and event management.",
		subdesc: "Built with Next.js, Sanity.io, and TailwindCSS to offer a seamless and elegant user experience.",
		href: "https://centrevitus.com",
		texture: "/textures/project/vitus-1.mp4",
		logo: "/assets/project-logo2.png",
		spotlight: "/assets/spotlight2.png",
		logoStyle: {
			backgroundColor: "#1C1A43",
			border: "0.2px solid #252262",
			boxShadow: "0px 0px 60px 0px #635BFF4D",
		},
		tags: [
			{ id: 1, name: "HTML", path: "/assets/icons/html.png" },
			{ id: 2, name: "JavaScript", path: "/assets/icons/javascript.png" },
			{ id: 3, name: "TailwindCSS", path: "/assets/icons/tailwind-css.png" },
			{ id: 4, name: "Next.js", path: "/assets/icons/nextjs-boilerplate-logo.png" },
			{ id: 5, name: "Sanity.io", path: "/assets/icons/sanity.png" },
		],
	},
	{
		title: "Coin Spy",
		desc: "Coin Spy offers real-time crypto market analysis, tracking prices, volume, and market capitalization while allowing users to save favorite coins.",
		subdesc: "Developed with React, TypeScript, Firebase, and Material UI for a smooth and secure experience.",
		href: "https://coin-spy.krisrahnev.com/",
		texture: "/textures/project/coin-spy-1.mp4",
		logo: "/assets/project-logo4.png",
		spotlight: "/assets/spotlight4.png",
		logoStyle: {
			backgroundColor: "#1C1A43",
			border: "0.2px solid #252262",
			boxShadow: "0px 0px 60px 0px #635BFF4D",
		},
		tags: [
			{ id: 1, name: "HTML", path: "/assets/icons/html.png" },
			{ id: 2, name: "CSS3", path: "/assets/icons/css3.png" },
			{ id: 3, name: "TypeScript", path: "/assets/icons/typescript.png" },
			{ id: 4, name: "React.js", path: "/assets/icons/react.png" },
			{ id: 5, name: "Firebase", path: "/assets/icons/firebase.png" },
			{ id: 6, name: "Material UI", path: "/assets/icons/MUI logo.png" },
		],
	},
	{
		title: "E-Commerce Store",
		desc: "E-Commerce Store is a Next.js-based web application integrating Hygraph CMS, GraphQL, and Stripe for seamless product management and transactions.",
		subdesc: "Built with Next.js, GraphQL, Hygraph CMS, and Stripe for a seamless shopping experience.",
		href: "https://e-commerce-store-omega.vercel.app/",
		texture: "/textures/project/EComStore1.mp4",
		logo: "/assets/project-logo5.png",
		spotlight: "/assets/spotlight5.png",
		logoStyle: {
			backgroundColor: "#1C1A43",
			border: "0.2px solid #252262",
			boxShadow: "0px 0px 60px 0px #635BFF4D",
		},
		tags: [
			{ id: 1, name: "HTML", path: "/assets/icons/html.png" },
			{ id: 2, name: "CSS3", path: "/assets/icons/css3.png" },
			{ id: 3, name: "JavaScript", path: "/assets/icons/javascript.png" },
			{ id: 4, name: "Next.js", path: "/assets/icons/nextjs-boilerplate-logo.png" },
			{ id: 5, name: "GraphQL", path: "/assets/icons/graphql.png" },
			{ id: 6, name: "Stripe", path: "/assets/icons/stripe.png" },
		],
	},
	{
		title: "Aetos Restaurant",
		desc: "Aetos Restaurant is a modern, responsive website for a restaurant that offers a seamless and elegant user experience. It features a modern, responsive design, a user-friendly interface, and a seamless and elegant user experience.",
		subdesc: "Built with Next.js, Sanity.io, and TailwindCSS to offer a seamless and elegant user experience.",
		href: "https://aetostaverna.co.uk/",
		texture: "/textures/project/aetos-1.mp4",
		logo: "/assets/project-logo3.png",
		spotlight: "/assets/spotlight2.png",
		logoStyle: {
			backgroundColor: "#1C1A43",
			border: "0.2px solid #252262",
			boxShadow: "0px 0px 60px 0px #635BFF4D",
		},
		tags: [
			{ id: 1, name: "HTML", path: "/assets/icons/html.png" },
			{ id: 2, name: "JavaScript", path: "/assets/icons/javascript.png" },
			{ id: 3, name: "React.js", path: "/assets/icons/react.png" },

			{ id: 5, name: "Sass", path: "/assets/icons/sass.png" },
		],
	},
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
	return {
		// Workstation scaling and positioning
		workstationScale: isSmall ? 15 : isMobile ? 20 : isTablet ? 23 : 25,
		workstationPosition: isSmall ? [0, -4, 0] : isMobile ? [0, -5, 0] : isTablet ? [0, -5.5, 0] : [0, -6, 0],

		// Decorative elements positioning
		cubePosition: isSmall ? [-2.5, 4, 0] : isMobile ? [-4, 3.5, 0] : isTablet ? [-7, 2, 0] : [-10, 1.5, 0],
		cubeScale: isSmall ? 0.5 : isMobile ? 0.6 : isTablet ? 0.8 : 1,

		reactLogoPosition: isSmall ? [2.5, 4, 0] : isMobile ? [4, 3.5, 0] : isTablet ? [7, 3, 0] : [12, 3, 0],
		reactLogoScale: isSmall ? 0.2 : isMobile ? 0.25 : isTablet ? 0.3 : 0.32,
	};
};

export const workExperiences = [
	{
		id: 1,
		name: "Freelance",
		pos: "Freelance Developer",
		duration: "Sept 2023 - Present",
		title: "Delivered various web projects for clients using HTML, CSS, JavaScript, React, and Next.js. Specialised in front-end development, responsive design, and modern web technologies, ensuring high-quality solutions tailored to client needs.",
		icon: "/assets/freelance.svg",
		animation: "salute",
	},
	{
		id: 2,
		name: "Carbon XYZ",
		pos: "Full Stack Developer",
		duration: "Feb 2023 - Sept 2023",
		title: "Built an NFT Marketplace for minting and auctioning NFTs using Next.js, MongoDB, and TailwindCSS. Integrated WEB3 with Alchemy, Ethers.js, and IPFS. Implemented MetaMask authentication, NFT minting, and real-time updates for admins and users.",
		icon: "/assets/carbonxyz.svg",
		animation: "victory",
	},
	{
		id: 3,
		name: "Kid's Galaxy",
		pos: "Full Stack Developer Intern",
		duration: "Nov 2022 - Feb 2023",
		title: "Developed an educational booking system where tutors manage availability and students book slots. Built with Next.js, MongoDB, and TailwindCSS. Implemented authentication, scheduling, real-time updates, and database optimisation. Ensured security and collaborated with designers for a seamless UI.",
		icon: "/assets/kidsgalaxy.svg",
		animation: "clapping",
	},
];

export const quote = [
	{
		id: 1,
		quote: `"Great things are done by a series of small things brought together"\n  - Vincent Van Gogh`,
	},
	{
		id: 2,
		quote: "Thanks for visiting!",
	},
];
