'use client';

import { useActiveSectionContext } from '@/context/activity';
import { links } from '@/lib/da';
import styles from '@/styles/styles';
import clsx from 'clsx';
import Link from 'next/link';

export default function Presente() {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext();

	return (
		<section className="flex w-full flex-col">
			<h1 className="text-[50px] font-semibold">Ojochogwu Dickson</h1>
			<p className="mt-10 text-base font-medium md:mt-4 max-w-[250px]">
				Software Engineer — Web Applications & Systems Architecture | Scientific Computing
			</p>
			<p className="mt-8 text-base font-normal leading-7 md:mt-2">
				Specializing in modern web applications and system architecture.
				Building scalable cloud infrastructure, real-time systems,
				and pixel-perfect user experiences that drive business growth
			</p>

			<nav className="mt-10 hidden md:flex">
				<ul className="flex flex-col gap-2">
					{links.map((link) => (
						<li key={link.extend}>
							<Link
								className={clsx(
									"relative block w-fit text-base transition-all duration-500 hover:text-[#95A1F9] hover:translate-x-2",
									{
										'text-[#95A1F9] translate-x-2': activeSection === link.name,
									}
								)}
								href={link.extend}
								onClick={() => {
									setActiveSection(link.name);
									setTimeOfLastClick(Date.now());
								}}
							>
								<span 
									className={clsx(
										"absolute -left-2 top-1/2 h-1 -translate-y-1/2 bg-[#95A1F9] rounded-full transition-all duration-500",
										{
											'w-4': activeSection === link.name,
											'w-0': activeSection !== link.name,
										}
									)}
								/>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<div className="bottom-[0px] mt-10 flex gap-4 md:mt-16">
				<span className="w-[300px] border-b border-[#6E6A85]" />
				<a
					className={`${styles.socials}`}
					href="https://x.com/Ojochogwu_d"
					target="_blank"
					rel="noreferrer noopener"
					aria-label="Twitter (opens in a new tab)"
				>
					<svg
						width="14"
						height="14"
						className="hover:fill-slate-200"
						viewBox="0 0 20 17"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20 2.81605C19.2642 3.13762 18.4733 3.3542 17.6433 3.45182C18.4908 2.95223 19.1417 
							2.1606 19.4475 1.2172C18.655 1.67988 17.7767 2.01621 16.8417 2.19752C16.0942 1.41245 15.0267 0.921875 13.8467 
							0.921875C11.1975 0.921875 9.2508 3.35501 9.8492 5.88085C6.44 5.71268 3.41667 4.10482 1.3925 1.66101C0.3175 3.47643 
							0.835 5.85133 2.66167 7.05398C1.99 7.03258 1.35667 6.85133 0.80417 6.54862C0.75917 8.41978 2.12167 10.1705 4.095 
							10.5601C3.5175 10.7144 2.885 10.7504 2.24167 10.629C2.76333 12.2336 4.27833 13.401 6.075 13.4338C4.35 14.7652 
							2.17667 15.36 0 15.1073C1.81583 16.2533 3.97333 16.9219 6.29 16.9219C13.9083 16.9219 18.2125 10.588 17.9525 4.9071C18.7542 
							4.33697 19.45 3.62573 20 2.81605Z"
							fill="#6E6A85"
						/>
					</svg>
					X
				</a>
				<a
					className={`${styles.socials}`}
					href="https://www.linkedin.com/in/ojochogwu-d-0838a312b/"
					target="_blank"
					rel="noreferrer noopener"
					aria-label="LinkedIn (opens in a new tab)"
				>
					<svg
						width="14"
						height="14"
						viewBox="0 0 24 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19.0002 2.92188H5C3 2.92188 2 3.92188 2 5.92188L2.00059 19.9219C2.00059 21.9219 3.00021 
							22.9219 5.00021 22.9219H19.0002C21.0002 22.9219 22.0002 21.9219 22.0002 19.9219V5.92188C22.0002 3.92188 21.0002 2.92188 
							19.0002 2.92188ZM8.66687 18.7553H6.16687V9.58854H8.66687V18.7553ZM7.41687 8.53187C6.61187 8.53187 5.95854 7.87355 
							5.95854 7.06188C5.95854 6.25021 6.61187 5.59187 7.41687 5.59187C8.22187 5.59187 8.87521 6.25021 8.87521 7.06188C8.87521 
							7.87355 8.22271 8.53187 7.41687 8.53187ZM18.6669 18.7553H16.1669V14.0853C16.1669 11.2786 12.8335 11.4911 12.8335 
							14.0853V18.7553H10.3335V9.58854H12.8335V11.0594C13.9969 8.90438 18.6669 8.74521 18.6669 13.1228V18.7553Z"
							fill="#6E6A85"
						/>
					</svg>
					LI
				</a>
				<a
					className={`${styles.socials}`}
					href="https://github.com/Ojochogwu866"
					target="_blank"
					rel="noreferrer noopener"
					aria-label="Github (opens in a new tab)"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						className="h-[14px] w-[14px]"
						aria-hidden="true"
					>
						<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
					</svg>{' '}
					GH
				</a>
			</div>
		</section>
	);
}