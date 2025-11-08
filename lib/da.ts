export const links = [
    {
        name: 'About',
        extend: '#about',
    },
    {
        name: 'Experience',
        extend: '#experience',
    },
    {
        name: 'Projects',
        extend: '#projects',
    },
] as const;

export const projects = [
    {
        project: 'Flync',
        description:
            'Healthcare data migration platform enabling secure patient data transfers between different EMR systems. Building automated migration pipelines with data mapping, validation, and HIPAA-compliant infrastructure for healthcare providers transitioning between medical record systems.',
        url: 'flync.ojochogwu.dev',
    },
    {
        project: 'Qumira Labs',
        description:
            'In-silico chemical toxicity prediction platform using machine learning and computational chemistry. Developing full-stack application integrating RDKit, Mordred, and Scikit-learn for molecular analysis and toxicity assessment.',
        url: 'qumira.ojochogwu.dev',
    },
] as const;

export const experiences = [
    {
        organization: 'Product 7',
        role: 'Frontend Software Engineer',
        period: 'Feb 2025 – Present',
        description:
            'Architecting comprehensive product feedback management platform with multi-workspace architecture, role-based permissions, and real-time voting systems. Contributing to technical architecture decisions and participating in weekly product planning as key technical stakeholder.',
    },
    {
        organization: 'Mlooop',
        role: 'Software Engineer (Contract)',
        period: 'Mar 2025 – Present',
        description:
            'Leading development of full-scale EMR system with complete AWS infrastructure deployment using CDK. Architected HIPAA-compliant PostgreSQL database achieving 96/100 Lighthouse score and 40% infrastructure cost reduction while maintaining 99.9% uptime for critical healthcare operations.',
    },
    {
        organization: 'Ignite',
        role: 'Frontend Software Engineer',
        period: 'Apr 2024 – Jan 2025',
        description:
            'Led frontend development of Nuxt-based cloud PaaS solution supporting deployment of web services, databases, and static sites. Engineered monitoring system with real-time metrics and reduced developer configuration time by 70% through environment management platform.',
    },
    {
        organization: 'Mediboards',
        role: 'Fullstack Software Engineer (Freelance)',
        period: 'Aug 2024 – Aug 2025',
        description:
            'Led technical development and product design of patient queue management platform for healthcare facilities. Architected multi-tenant system with EMR integration layer, automated patient data sync, and regulatory compliance (NDPR, NHA) while establishing robust CI/CD pipeline.',
    },
    {
        organization: 'Clinikli',
        role: 'Frontend Engineer',
        period: 'Apr 2022 – Mar 2023',
        description:
            'Built scalable Vue.js healthcare platform with geospatial matching system using Google Maps API. Developed extensive library of reusable composables for API integration and optimized application performance achieving strong Lighthouse scores.',
    },
    {
        organization: 'Sonvisage',
        role: 'Frontend Engineer',
        period: 'Mar 2021 – Feb 2022',
        description:
            'Developed healthcare management platform with focus on performance optimization. Engineered high-performance bulk upload system for large healthcare datasets and built responsive admin dashboard supporting daily operations for growing user base.',
    },
] as const;