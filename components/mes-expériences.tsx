import { experiences } from '@/lib/da';
import { CurrentSection } from '@/lib/hookslaw';
import { fadeIn } from '@/lib/motion';
import { motion } from 'framer-motion';
import React from 'react';
import RouteChild from './RouteChild';

export default function MesExpériences() {
	const { ref } = CurrentSection('Experience', 0.5);

	return (
		<section ref={ref} id="experience" className="scroll-mt-36 md:px-[40px]">
			<h2 className="pb-2 text-base font-semibold">Experiences</h2>
			<div className="flex flex-col gap-10">
				{experiences.map((experience, index) => (
					<React.Fragment key={index}>
						<Experience {...experience} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}

type ExperienceProps = (typeof experiences)[number];

function Experience({ organization, role, period, description }: ExperienceProps) {
	return (
		<motion.section
			variants={fadeIn('up', 'experiences', 0.2, 0.2)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className="w-full transition-all duration-300 hover:bg-[#0e0c1f] hover:shadow-lg hover:shadow-[#95A1F9]/10 hover:border hover:border-[#95A1F9]/20 cursor-pointer group rounded-lg"
		>
			<div className="p-6 flex flex-col md:flex-row gap-4 md:gap-6">
				<div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 md:min-w-[120px]">
					{period}
				</div>
				<div className="flex-1">
					<h3 className="text-lg font-semibold text-gray-200 group-hover:text-[#95A1F9] transition-colors duration-300">
						{organization}
					</h3>
					<p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-2">
						{role}
					</p>
					<p className="text-sm leading-7 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
						{description}
					</p>
				</div>
			</div>
		</motion.section>
	);
}