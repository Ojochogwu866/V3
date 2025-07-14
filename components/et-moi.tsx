'use client';

import { CurrentSection } from '@/lib/hookslaw';

export default function Etmoi() {
	const { ref } = CurrentSection('About', 0.5);

	return (
		<section
			ref={ref}
			id="about"
			className="flex w-full scroll-mt-36 items-center justify-center md:px-[40px]"
		>
			<div className="">
				<h2 className="pb-2 text-base font-semibold md:hidden">About</h2>
				<p className="flex flex-col text-sm font-normal leading-7">
					Software Engineer specializing in modern web applications and system architecture. 
					I build scalable, high-performance solutions from frontend interfaces to cloud 
					infrastructure, with expertise in real-time systems, multi-tenant architectures, 
					and performance optimization.
					<br />
					<br className="mt-3" />
					My experience spans fast-paced startups where I have delivered solutions that drive 
					measurable business impact. I architect for accessibility, performance, and 
					scalability - from achieving 96/100 Lighthouse scores to reducing infrastructure 
					costs by 40% and processing times from minutes to seconds.
					<br />
					<br className="mt-3" />
					<div className="">
						I have built a variety of projects, accessible on my github, but
						notably you can check out{' '}
						<a
							href="https://anker.ojochogwu.dev"
							target="_blank"
							rel="noreferrer noopener"
							aria-label="Anker (opens in a new tab)"
							className="font-normal text-gray-200"
						>
							Anker
						</a>
						, a fabrics marketplace for the African market,{' '}
						<a
							href="https://nextgen.xyz"
							target="_blank"
							rel="noreferrer noopener"
							aria-label="NextGen (opens in a new tab)"
							className="font-normal text-gray-200"
						>
							NextGen
						</a>
						, a mentorship platform with automated scheduling, and currently working on{' '}
						<a
							href="https://codonlabs.ojochogwu.dev"
							target="_blank"
							rel="noreferrer noopener"
							aria-label="Codon Labs (opens in a new tab)"
							className="font-normal text-gray-200"
						>
							Codon Labs
						</a>
						, a chemical intelligence toxicity prediction system leveraging machine 
						learning for pharmaceutical and research applications.
					</div>
				</p>
			</div>
		</section>
	);
}