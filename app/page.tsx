'use client';

import Articles from '@/components/articles-écrits';
import Etmoi from '@/components/et-moi';
import Footer from '@/components/Footer';
import Presente from '@/components/je-me-presente';
import MesExpériences from '@/components/mes-expériences';
import MesProjets from '@/components/mes-projets';

export default function Home() {
	return (
		<main className="flex h-auto w-full flex-col gap-10 px-[20px] text-[#6E6A85] md:h-screen md:px-[80px]">
			<div className="mt-12 max-md:mb-10 flex h-auto w-full items-center justify-center md:fixed md:mt-32 md:w-[40%] md:h-screen md:flex-1 md:items-start md:justify-start">
				<Presente />
			</div>
			<div className="right-0 flex h-auto w-full flex-col md:absolute md:mt-[86px] md:w-1/2 md:flex-1 md:p-10">
				<Etmoi />
				<div className="mt-[60px] md:mt-36">
					<MesExpériences />
				</div>
				<div className="mt-[60px] md:mt-36">
					<MesProjets />
				</div>
				<div className="mt-[60px] md:mt-24 md:pr-[40px]">
					<Articles />
				</div>
				<div className="mt-[60px] md:mt-28 md:pr-[40px]">
					<Footer />
				</div>
			</div>
		</main>
	);
}