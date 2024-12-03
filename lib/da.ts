export const links = [
	{
		name: 'About',
		extend: '#about',
	},
	{
		name: 'Experience',
		extend: '#experience',
	},
	{
		name: 'Projects',
		extend: '#projects',
	},
] as const;

export const projects = [
	{
		project: 'You Read',
		description:
			'Book Reading app for keeping tabs of your reading adventures, documenting your reading experience, like book genre covered in a period of time, total number of pages read, and getting access to latest books and best selling, by fetching  the boks data from New York Times API.',
		url: 'you-read.vercel.app',
	},
	{
		project: 'Fiction Factory',
		description:
			'Hiring platform for fiction writters. Hire vetted plot writters to do your story telling, buy manuscripts and get your worsk published at very low cost. Also, you get paid to do your writting Job',
		url: 'fictionfactory.com',
	},
	{
		project: 'ReDux',
		description:
			' Work In Progress: Open source software for dicumentation teams and developer expereince teams to measure the performance of their documentations and gain quality insight on how to improve',
		url: 'redux.verce.app',
	},
] as const;

export const experiences = [
	{
		organization: 'Mediboards',
		description:
			'Engineered a sophisticated multi-tenant digital signage system for healthcare facilities with hierarchical sub-account management. Implemented secure data isolation, role-based access control, and automated CI/CD pipelines while maintaining HIPAA, NDPR and NHA compliance.',
	},
	{
		organization: 'NextGen',
		description:
			'Engineered a high-performance mentorship platform with automated event scheduling and Google Calendar integration. Led the development of both frontend and backend components, implementing secure APIs and real-time notifications for seamless mentor-mentee connections.',
	},
	{
		organization: 'Clinikli',
		description:
			'Developed a Vue.js healthcare platform connecting patients with medical professionals through location-based matching. Implemented advanced search algorithms and payment integration while maintaining modular, scalable architecture.',
	},
	{
		organization: 'Sonvisage',
		description:
			'Built a responsive healthcare management platform focusing on efficient data handling and bulk operations. Engineered optimized state management solutions and implemented real-time IoT data collection through REST APIs.',
	},
	{
		organization: 'Vinca',
		description:
			'Developed a comprehensive patient-doctor appointment booking system with admin dashboard. Built responsive interfaces and real-time messaging features, ensuring seamless healthcare service delivery.',
	},
] as const;
