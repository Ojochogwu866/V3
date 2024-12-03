'use client';

import { projects } from '@/lib/da';
import { CurrentSection } from '@/lib/hookslaw';
import { fadeIn } from '@/lib/motion';
import { motion } from 'framer-motion';

export default function MesExpériences() {
	const { ref } = CurrentSection('Projects', 0.5);
	return (
		<section ref={ref} id="project" className="scroll-mt-36 md:px-[40px]">
			<h2 className="pb-2 text-base font-semibold md:hidden">Work</h2>
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
					className="flex gap-2 text-sm"
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
			className="max-h-[250px] w-full overflow-auto rounded-lg bg-[#0c0a1b] p-4"
		>
			<div className="flex items-center gap-1">
				<h3 className="text-lg font-semibold">{project}</h3>
			</div>
			<p className="mt-4 text-sm leading-7 text-[#6E6A85]">{description}</p>
		</motion.section>
	);
}
