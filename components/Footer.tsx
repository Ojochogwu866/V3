'use client';

import { footerVariants } from '@/lib/motion';
import { motion } from 'framer-motion';

export default function Footer() {
	return (
		<section className="flex w-full pb-10 md:px-[40px]">
			<motion.div variants={footerVariants} initial="hidden" whileInView="show">
				<p className="text-[13px] leading-6 text-gray-400">
					Designed in figma, and code written in TypeScript and NextJs by
					Me☺️. Find it on{' '}
					<a
						className="font-semibold text-gray-200"
						target="_blank"
						rel="noreferrer noopener"
						aria-label="GitHub (opens in a new tab)"
						href="https://github.com/Ojochogwu866/portfolio-v3"
					>
						Github
					</a>
					.
				</p>
				<div className="gradient-04 absolute -mt-20 flex h-[80px] w-[200px] items-end justify-end" />
			</motion.div>
		</section>
	);
}