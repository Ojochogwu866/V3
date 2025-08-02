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
		project: 'Anker',
		description:
			'E-commerce platform for the African fabrics market. Built a scalable marketplace connecting fabric vendors with customers across Africa, featuring product catalog management, secure payment processing, and multi-currency support for regional markets.',
		url: 'anker.ojochogwu.dev',
	},
	{
		project: 'Codon',
		description:
			'Chemical intelligence toxicity prediction system leveraging machine learning algorithms. Developed a comprehensive platform for predicting chemical compound toxicity, environmental impact assessment, and safety analysis for research institutions and pharmaceutical companies.',
		url: 'codonlabs.ojochogwu.dev',
	},
	{
		project: 'NextGen',
		description:
			'High-performance mentorship platform with automated event scheduling and Google Calendar integration. Built secure APIs, real-time notifications, and seamless mentor-mentee connection system for enhanced learning experiences.',
		url: 'nextgenhub.xyz',
	},
	{
		project: 'Pathfindr',
		description:
			'High-performance TypeScript pathfinding library implementing multiple algorithms including Dijkstra and A* (A-star). Features flexible graph representation, type-safe implementation, comprehensive test coverage, and performance benchmarking tools.',
		url: 'npmjs.com/package/pathfindr',
	},
] as const;

export const experiences = [
	{
		organization: 'Product 7',
		role: 'Frontend Software Engineer',
		period: 'Jan 2025 – Present',
		description:
			'Architecting comprehensive product feedback management platform with multi-workspace architecture, role-based permissions, and real-time voting systems. Contributing to technical architecture decisions and product strategy for African market expansion.',
	},
	{
		organization: 'Ignite',
		role: 'Frontend Software Engineer',
		period: 'Apr – Dec 2024',
		description:
			'Led development of cloud PaaS solution serving enterprise clients. Architected scalable infrastructure supporting web services and databases, while reducing developer configuration time by 70% through environment management platform.',
	},
	{
		organization: 'Mlooop',
		role: 'Fullstack Engineer (Contract)',
		period: 'Aug – Dec 2024',
		description:
			'Delivered high-performance medical platform achieving 96/100 Lighthouse score. Implemented infrastructure-as-code practices reducing costs by 40% and designed optimized data systems with sub-150ms response times.',
	},
	{
		organization: 'Mediboards',
		role: 'Fullstack Software Engineer',
		period: '2023 – 2024',
		description:
			'Engineered healthcare management system for multiple facilities with focus on regulatory compliance (NDPR, NHA). Architected multi-tenant platform with hierarchical management and reduced deployment time by 85%.',
	},
	{
		organization: 'Clinikli',
		role: 'Frontend Engineer',
		period: '2022 – 2023',
		description:
			'Built scalable healthcare marketplace connecting patients with providers. Implemented geospatial matching algorithm reducing patient-to-doctor matching time by 75% and serving hundreds of monthly users.',
	},
	{
		organization: 'Sonvisage',
		role: 'Frontend Engineer',
		period: '2021 – 2022',
		description:
			'Developed healthcare management platform with focus on performance optimization. Engineered bulk processing system reducing operation time from 3 minutes to 8 seconds and achieved 65% bundle size reduction.',
	},
] as const;
