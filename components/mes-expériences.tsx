import { experiences } from '@/lib/da';
import { CurrentSection } from '@/lib/hookslaw';
import { fadeIn } from '@/lib/motion';
import { motion } from 'framer-motion';
import React from 'react';
import RouteChild from './RouteChild';

export default function MesExpériences() {
	const { ref } = CurrentSection('Experience', 0.5);
	const top3Experiences = experiences.slice(0, 3);

	return (
		<section ref={ref} id="experience" className="scroll-mt-36 md:px-[40px]">
			<h2 className="pb-2 text-base font-semibold md:hidden">Experiences</h2>
			<div className="flex flex-col gap-10">
				{top3Experiences.map((experience, index) => (
					<React.Fragment key={index}>
						<Experience {...experience} />
					</React.Fragment>
				))}
			</div>
			<div className="mt-10">
				<RouteChild url="/experience">
					View All Experiences <span />→
				</RouteChild>
			</div>
		</section>
	);
}

type ExperienceProps = (typeof experiences)[number];

function Experience({ organization, description }: ExperienceProps) {
	return (
		<motion.section
			variants={fadeIn('up', 'experiences', 0.2, 0.2)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className="max-h-[250px] w-full overflow-auto bg-[#0c0a1b]"
		>
			<div className="p-4">
				<h3 className="text-lg font-semibold">{organization}</h3>
				<p className="mt-4 text-sm leading-7">{description}</p>
			</div>
		</motion.section>
	);
}
