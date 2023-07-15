import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	git,
	figma,
	threejs,
	webpack,
	bootstrap,
	bd,
	outsource,
	snickshop,
	travello,
	marvel,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "HTML/CSS Developer",
		icon: web,
	},
	{
		title: "React Developer",
		icon: mobile,
	},
	{
		title: "Web Designer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Bootstrap",
		icon: bootstrap,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "Webpack",
		icon: webpack,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
];

const experiences = [
	{
		title: "Frontend Developer",
		company_name: "Barcelona Design",
		icon: bd,
		iconBg: "#E6DEDD",
		date: "May 2021 - Current",
		points: [
			"Developing and maintaining web applications using JavaScript and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
		],
	},

	{
		title: "HTML/CSS Developer",
		company_name: "Outsource",
		icon: outsource,
		iconBg: "#E6DEDD",
		date: "November 2020 - Current",
		points: [
			"Developing user interfaces using HTML, CSS, and JavaScript.",
			"Building interactive features and functionality for web applications using JavaScript.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Working with libraries and frameworks, like jQuery or React, to enhance the user experience.",
			"Handling form validation, data manipulation, and other client-side scripting tasks.",
		],
	},
];

const testimonials = [
	{
		testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Marvel Comics",
		description:
			"Marvel Comics project is a platform where you can search for information about characters from Marvel comics. The project utilizes the Marvel API, which provides access to a vast database of information about characters and their connections to comics, movies, and other media products.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "api",
				color: "green-text-gradient",
			},
			{
				name: "webpack",
				color: "pink-text-gradient",
			},
		],
		image: marvel,
		source_code_link: "https://github.com/Vouqreel/MarvelComics",
	},
	{
		name: "Snick Shop",
		description:
			"SnickShop - a test landing page for an online sneaker store. On the website, you can search, filter, and purchase sneakers, leave reviews, subscribe to newsletters, and receive assistance from customer service. Find your perfect pair and express your style with our high-quality models.",
		tags: [
			{
				name: "js",
				color: "blue-text-gradient",
			},
			{
				name: "json",
				color: "green-text-gradient",
			},
			{
				name: "gulp",
				color: "pink-text-gradient",
			},
		],
		image: snickshop,
		source_code_link: "https://github.com/Vouqreel/SnickShop",
	},
	{
		name: "Travello Tours",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and offers curated recommendations for popular destinations. The platform integrates with multiple airlines and hotel providers to provide a wide range of options for users to choose from.",
		tags: [
			{
				name: "js",
				color: "blue-text-gradient",
			},
			{
				name: "aos",
				color: "green-text-gradient",
			},
			{
				name: "gulp",
				color: "pink-text-gradient",
			},
		],
		image: travello,
		source_code_link: "https://github.com/Vouqreel/TravelloTours",
	},
];

export { services, technologies, experiences, testimonials, projects };
