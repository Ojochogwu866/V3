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
		url: 'nextgen.xyz',
	},
] as const;

export const experiences = [
	{
		organization: 'Product 7',
		description:
			'Developed customer feedback and feature voting system with Nuxt 3 featuring SSR/CSR architecture. Implemented tenant isolation, dynamic roadmap visualizations, real-time upvoting with WebSockets, and OAuth integration with JWT token management.',
	},
	{
		organization: 'Ignite',
		description:
			'Led development of a Nuxt-based cloud Platform-as-a-Service (PaaS) solution. Architected scalable frontend infrastructure, engineered comprehensive monitoring systems with real-time metrics, and built environment management platform reducing configuration time by 70%.',
	},
	{
		organization: 'Mlooop',
		description:
			'Deployed complete AWS infrastructure using CDK with infrastructure as code practices. Achieved 96/100 Lighthouse performance score, designed optimized PostgreSQL schema with sub-150ms response times, and reduced infrastructure costs by 40%.',
	},
	{
		organization: 'Mediboards',
		description:
			'Engineered comprehensive digital signage and patient management system for healthcare facilities. Architected sophisticated multi-tenant system with hierarchical sub-account management, ensuring NDPR and NHA compliance with robust CI/CD pipeline.',
	},
	{
		organization: 'Clinikli',
		description:
			'Engineered scalable Vue.js application serving hundreds of monthly users, reducing patient-to-doctor matching time by 75%. Implemented advanced geospatial search system and built modular component architecture with 98% code reuse.',
	},
	{
		organization: 'Sonvisage',
		description:
			'Developed pixel-perfect healthcare management platform with efficient data handling. Engineered bulk upload system handling 10,000+ records, reducing processing time from 3 minutes to 8 seconds, and achieved 65% reduction in bundle size.',
	},
] as const;