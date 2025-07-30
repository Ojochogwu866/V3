import Header from '@/components/Topbar';
import ActiveSectionContextProvider from '@/context/activity';
import type { Metadata } from 'next';
import { Syne } from 'next/font/google';
import './globals.css';

const syne = Syne({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ojochogwu Dickson | Software Engineer — Web Applications & Systems Architecture | Scientific Computing',
	description:
		'FullStack Engineer specializing in web applications and systems architecture. Building scalable digital solutions with a passion for biotech infrastructure and cutting-edge interfaces that bridge technology and life sciences.',
	
	verification: {
		google: '2tBbFjT_08FhTgCt92e61wYxL8BrdaWHOI6Zjotzpak'
	},

	keywords: [
		'FullStack Engineer',
		'Systems Architecture',
		'Web Applications',
		'Biotech Infrastructure',
		'React Developer',
		'Next.js Developer',
		'JavaScript',
		'TypeScript',
		'Node.js',
		'Life Sciences Technology',
		'Software Engineer',
		'Ojochogwu Dickson'
	],

	authors: [{ name: 'Ojochogwu Dickson' }],
	creator: 'Ojochogwu Dickson',

	openGraph: {
		title: 'Ojochogwu Dickson | Software Engineer — Web Applications & Systems Architecture | Scientific Computing',
		description: 'Software Engineer — Web Applications & Systems Architecture | Scientific Computing. Specializing in web applications and systems architecture. Building scalable digital solutions with a passion for biotech infrastructure and cutting-edge interfaces.',
		url: 'https://ojochogwu.dev',
		siteName: 'Ojochogwu Dickson Portfolio',
		images: [
			{
				url: 'https://ojochogwu.dev/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Ojochogwu Dickson - Software Engineer — Web Applications & Systems Architecture | Scientific Computing',
			},
		],
		locale: 'en_US',
		type: 'website',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Ojochogwu Dickson | Software Engineer — Web Applications & Systems Architecture | Scientific Computing',
		description: 'Software Engineer — Web Applications & Systems Architecture | Scientific Computing.Specializing in web applications and systems architecture. Building scalable digital solutions with a passion for biotech infrastructure.',
		images: ['https://ojochogwu.dev/twitter-image.jpg'],
		creator: '@ojochogwu_d',
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},

	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},

	category: 'technology',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body className={`${syne.className} bg-[#040404]`}>
				<ActiveSectionContextProvider>
					<Header />
					{children}
				</ActiveSectionContextProvider>
			</body>
		</html>
	);
}