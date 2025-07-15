'use client';

import { projects } from '@/lib/da';
import { CurrentSection } from '@/lib/hookslaw';
import { fadeIn } from '@/lib/motion';
import { motion } from 'framer-motion';

export default function MesExpériences() {
	const { ref } = CurrentSection('Projects', 0.5);
	return (
		<section ref={ref} id="projects" className="scroll-mt-36 md:px-[40px]">
			<h2 className="pb-2 text-base font-semibold">Projects</h2>
			<div className="flex flex-col gap-10">
				{projects.map((project, index) => (
					<Project
						key={index}
						project={project.project}
						description={project.description}
						url={project.url}
					/>
				))}
			</div>
			<div className="mt-10">
				<a
					className="flex gap-2 text-sm hover:text-[#95A1F9] transition-colors duration-300"
					href="https://github.com/Ojochogwu866"
					target="_blank"
					rel="noreferrer noopener"
					aria-label="GitHub (opens in a new tab)"
				>
					<div className="">View all my projects</div>→
				</a>
			</div>
		</section>
	);
}

type ProjectProps = {
	project: string;
	description: string;
	url: string;
};

function Project({ project, description, url }: ProjectProps) {
	return (
		<motion.section
			variants={fadeIn('up', 'experiences', 0.2, 0.2)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className="w-full transition-all duration-300 hover:bg-[#0e0c1f] hover:shadow-lg hover:shadow-[#95A1F9]/10 hover:border hover:border-[#95A1F9]/20 cursor-pointer group rounded-lg"
		>
			<a
				href={`https://${url}`}
				target="_blank"
				rel="noreferrer noopener"
				aria-label={`${project} (opens in a new tab)`}
				className="block"
			>
				<div className="p-6">
					<div className="flex items-center gap-2 mb-2">
						<h3 className="text-lg font-semibold text-gray-200 group-hover:text-[#95A1F9] transition-colors duration-300">
							{project}
						</h3>
						<svg 
							className="w-4 h-4 text-gray-400 group-hover:text-[#95A1F9] transition-colors duration-300" 
							fill="none" 
							stroke="currentColor" 
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
					</div>
					<p className="text-sm leading-7 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
						{description}
					</p>
				</div>
			</a>
		</motion.section>
	);
}