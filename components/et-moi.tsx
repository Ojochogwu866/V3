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
					Software Developer building usable products, crafting modern user
					interfaces and systems that are scalable, by utilizing the right
					tools. In recent years, I have honed my skills with the necessary
					tools, enhancing both my design and engineering acumen.
					<br />
					<br className="mt-3" />
					I have contributed to fast-paced startups by solving problems through
					thoughtful design and implementing cutting-edge solutions. I
					specialize in architecting for accessibility and performance,
					leveraging my engineering intelligence and abilities, with a
					journey-focused and result-oriented approach to problems
					<br />
					<br className="mt-3" />
					<div className="">
						I have built a couple of stuffs, accessible on my github, but
						notably you can check out <span />
						<a
							href="https://you-read.vercel.app"
							target="_blank"
							rel="noreferrer noopener"
							aria-label="You-Read (opens in a new tab)"
							className="font-normal text-gray-200"
						>
							You Read
						</a>
						,{' '}
						<a
							href="https://fiction-factory.com"
							target="_blank"
							rel="noreferrer noopener"
							aria-label="Fiction-factory (opens in a new tab)"
							className="font-normal text-gray-200"
						>
							Fiction Factory
						</a>{' '}
						and currently, I am working on{' '}
						<a className="font-normal text-gray-200" href="">
							Redux
						</a>
						, an open-source documentation library to help documentation teams,
						and developers measure the performance of their documentations, and
						make improvements.
					</div>
				</p>
			</div>
		</section>
	);
}
