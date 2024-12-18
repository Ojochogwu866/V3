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
			<p className="mt-10 text-base font-medium md:mt-4">
				FullStack Software Engineer <br />& Developer Advocate
			</p>
			<p className="mt-8 text-base font-normal leading-7 md:mt-2">
				Engineering (FS) — Polished, pixel-perfect user experience for modern
				applications. Crafting Intelligent User Interfaces, and building
				scalable backend systems
			</p>

			<nav className="mt-10 hidden md:flex">
				<ul className="flex gap-4">
					{links.map((link) => (
						<li key={link.extend}>
							<Link
								className={clsx(
									"relative block w-fit text-base after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#95A1F9] after:transition after:duration-300 after:content-[''] after:hover:scale-x-100",
									{
										'border-b-[2px] border-[#95A1F9] text-[#95A1F9] transition duration-150':
											activeSection === link.name,
									}
								)}
								href={link.extend}
								onClick={() => {
									setActiveSection(link.name);
									setTimeOfLastClick(Date.now());
								}}
							>
								{link.name}
								{link.name === activeSection && <span className=""></span>}
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
					href=""
					target="_blank"
					rel="noreferrer noopener"
					aria-label="Spotify (opens in a new tab)"
				>
					<svg
						width="14"
						height="14"
						viewBox="0 0 24 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 0.44873C5.3835 0.44873 0 5.83223 0 12.4487C0 19.0652 5.3835 24.4487 12 24.4487C18.6165 
							24.4487 24 19.0652 24 12.4487C24 5.83223 18.6165 0.44873 12 0.44873ZM17.505 17.7707C17.358 17.9792 
							17.127 18.0902 16.8915 18.0902C16.7415 18.0902 16.5915 18.0467 16.461 17.9537C13.6485 15.9767 8.97 
							15.8672 5.811 16.6037C5.4105 16.6982 5.004 16.4462 4.911 16.0427C4.818 15.6392 5.067 15.2357 5.472 15.1412C8.9445 
							14.3372 14.1345 14.4842 17.322 16.7267C17.661 16.9652 17.742 17.4317 17.505 17.7707ZM18.969 14.8442C18.822 15.0482 18.5925 
							15.1562 18.36 15.1562C18.207 15.1562 18.0555 15.1112 17.922 15.0152C14.6595 12.6737 10.6515 12.0917 5.3025 13.1837C4.899 
							13.2632 4.5 13.0052 4.4175 12.5987C4.3335 12.1937 4.596 11.7962 5.001 11.7137C10.7865 10.5332 15.1695 11.1932 18.7965 
							13.7957C19.1325 14.0387 19.2105 14.5067 18.969 14.8442ZM20.448 10.9142C20.3025 11.1287 20.0655 11.2427 19.827 11.2427C19.6815 
							11.2427 19.5345 11.2007 19.4055 11.1137C15.27 8.30723 8.9835 8.29373 4.914 9.73373C4.524 9.86873 4.095 9.66623 3.957 
							9.27473C3.819 8.88473 4.023 8.45573 4.4145 8.31773C8.841 6.75323 15.7005 6.78623 20.25 9.87173C20.592 10.1042 20.679 10.5707 
							20.448 10.9142Z"
							fill="#6E6A85"
						/>
					</svg>{' '}
					SP
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
