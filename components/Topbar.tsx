'use client';

import { navVariants } from '@/lib/motion';
import { motion } from 'framer-motion';

export default function Topbar() {
	const handleClick = async () => {
		const response = await fetch('/api');
		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = 'ojochogwudickson.pdf';
		link.click();
		window.URL.revokeObjectURL(url);
	};
	return (
		<motion.header
			variants={navVariants}
			initial="hidden"
			viewport={{ once: true, amount: 0.25 }}
			whileInView="show"
			className="relative flex h-[80px] w-full items-end justify-end px-[40px] pt-2 md:fixed md:px-[80px] md:pt-3"
		>
			<button
				onClick={handleClick}
				className="z-50 flex items-center rounded-full border-[1.5px] border-solid border-[#95A1F9] bg-[#0c0a1b] px-4 py-1 text-[#6E6A85] md:px-8 md:py-2"
			>
				Resume
			</button>
		</motion.header>
	);
}
