'use client';

import type { Section } from '@/lib/types';
import React, { createContext, useContext, useState } from 'react';

type ActiveSectionContextProviderProps = {
	children: React.ReactNode;
};
type ActiveSectionContextType = {
	activeSection: Section;
	setActiveSection: React.Dispatch<React.SetStateAction<Section>>;
	timeOfLastClick: number;
	setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
	createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
	children,
}: ActiveSectionContextProviderProps) {
	const [activeSection, setActiveSection] = useState<Section>('About');
	const [timeOfLastClick, setTimeOfLastClick] = useState(0);
	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClick,
				setTimeOfLastClick,
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	);
}

export function useActiveSectionContext() {
	const context = useContext(ActiveSectionContext);

	if (context === null) {
		throw new Error(
			'useActiveSectionContext must be within an ActiveSectionContextProvider'
		);
	}
	return context;
}
