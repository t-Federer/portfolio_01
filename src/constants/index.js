import gitIcon from '../assets/git.svg';
import javascriptIcon from '../assets/javascript.svg';
import tailwindIcon from '../assets/tailwindcss.png';
import reactIcon from '../assets/react.svg';
import threejsIcon from '../assets/threejs_bg.svg';
import sqlIcon from '../assets/sql.svg';
import adobeAiIcon from '../assets/adobe_ai.svg';
import adobeLrIcon from '../assets/adobe_lr.svg';
import adobePsIcon from '../assets/adobe_ps.svg';
import pythonIcon from '../assets/python.svg';
import figmaIcon from '../assets/figma.svg';
import ueIcon from '../assets/ue_white.svg';
import blenderIcon from '../assets/blender.svg';
import hmrLogo from '../assets/hmr6bitadder.png';
import macbookLogo from '../assets/macbookClone.svg';
import hangmanLogo from '../assets/hangman.svg';
import unipiIcon from '../assets/unipi_white.svg';

const base = import.meta.env.BASE_URL;

export const navLinks = [
        {
                id: 1,
                name: 'About',
                href: '#about',
        },
        {
                id: 2,
                name: 'Experience',
                href: '#experience',
        },
        {
                id: 3,
                name: 'Contact',
                href: '#contact',
        },
];

export const techStack = [
        {
                path: gitIcon,
                label: "Git",
                logoSize: { 
                        mobile: "w-4 h-4", 
                        tablet: "w-4 h-4", 
                        desktop: "w-6.5 h-6.5" 
                },
        },
        {
                path: javascriptIcon,
                label: "JavaScript",
                logoSize: { 
                        mobile: "w-3.5 h-3.5", 
                        tablet: "w-3.5 h-3.5", 
                        desktop: "w-5.5 h-5.5" 
                },
        },
        {
                path: tailwindIcon,
                label: "Tailwind",
                logoSize: { 
                        mobile: "w-3.5 h-3.5", 
                        tablet: "w-3.5 h-3.5", 
                        desktop: "w-5 h-5" 
                },
        },
        {
                path: reactIcon,
                label: "React",
                logoSize: { 
                        mobile: "w-4 h-4", 
                        tablet: "w-4 h-4", 
                        desktop: "w-6 h-6" 
                },
        },
        {
                path: threejsIcon,
                label: "Three.js",
                logoSize: { 
                        mobile: "w-3.5 h-3.5", 
                        tablet: "w-3.5 h-3.5", 
                        desktop: "w-5.5 h-5.5" 
                },
        },
        {
                path: sqlIcon,
                label: "SQL",
                logoSize: { 
                        mobile: "w-5 h-5", 
                        tablet: "w-5 h-5", 
                        desktop: "w-7 h-7" 
                },
        },
        {
                path: adobeAiIcon,
                label: "Illustrator",
                logoSize: { 
                        mobile: "w-5 h-5", 
                        tablet: "w-5 h-5", 
                        desktop: "w-6 h-6" 
                },
        },
        {
                path: adobeLrIcon,
                label: "Lightroom",
                logoSize: { 
                        mobile: "w-5 h-5", 
                        tablet: "w-5 h-5", 
                        desktop: "w-6 h-6" 
                },
        },
        {
                path: adobePsIcon,
                label: "PhotoShop",
                logoSize: { 
                        mobile: "w-5 h-5", 
                        tablet: "w-5 h-5", 
                        desktop: "w-6 h-6" 
                },
        },
        {
                path: pythonIcon,
                label: "Python",
                logoSize: { 
                        mobile: "w-4 h-4", 
                        tablet: "w-4 h-4", 
                        desktop: "w-6 h-6" 
                },
        },
        {
                path: figmaIcon,
                label: "Figma",
                logoSize: { 
                        mobile: "w-5 h-5", 
                        tablet: "w-5 h-5", 
                        desktop: "w-7 h-7" 
                },
        },
        {
                path: ueIcon,
                label: "Unreal",
                logoSize: { 
                        mobile: "w-4 h-4", 
                        tablet: "w-4 h-4", 
                        desktop: "w-6 h-6" 
                },
        },
        {
                path: blenderIcon,
                label: "Blender",
                logoSize: { 
                        mobile: "w-4 h-4", 
                        tablet: "w-4 h-4", 
                        desktop: "w-6 h-6" 
                },
        },
];

export const myProjects = [
        {
                title: "Macbook Pro - Landing Page (clone)",
                desc: 'A frontend project that recreates an Apple\u2011style landing page, combining Three.js and GSAP to deliver a clean implementation of interactive 3D elements and smooth animations within a modern UI.',
                subdesc: '',
                codeHref: 'https://github.com/t-Federer/apple_macbook_clone00',
                linkHref: 'https://macbook-clone-landing.vercel.app/',
                texture: `${base}textures/project/project2.mp4`,
                logo: macbookLogo,
                logoStyle: {
                        backgroundColor: '#13202F',
                        border: '0.2px solid #17293E',
                },
                tags: ["Git", "React", "Tailwind", "Three.js"],
        },
        {
                title: 'HMR 6-Bit Adder (alpha)',
                desc: 'Step inside a virtual reconstruction of the original 1956 laboratory at the University of Pisa, where Italy\u2019s first electronic computer was built.',
                subdesc: 'Discover the test module that became its first working component.',
                codeHref: '',
                linkHref: 'https://www.progettohmr.it/MR-VR/',
                texture: `${base}textures/project/project1.mp4`,
                logo: hmrLogo,
                logoStyle: {
                        backgroundColor: '#290A1F',
                        border: '0.2px solid #1C1C21',
                },
                tags: ["Unreal", "Blender", "PhotoShop"],
        },
        // {
        //         title: "Google Drive (clone)", 
        //         desc: 'An innovative healthcare platform designed to streamline essential medical processes. ',
        //         subdesc: 'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
        //         codeHref: 'https://',
        //         linkHref: 'https://',
        //         texture: `${base}textures/project/project4.mp4`,
        //         logo: logo,
        //         logoStyle: {
                //         backgroundColor: '#60f5a1',
                //         border: '0.2px solid rgba(208, 213, 221, 1)',
        //         },
        //         tags: ["Git", "React", "Tailwind"],
        // },
        {
                title: 'Hangman',
                desc: 'A simple React\u2011based hangman minigame that uses state and conditional rendering to manage progress, lives, and word reveal.',
                subdesc: 'The interface updates smoothly as each guess modifies the game state.',
                codeHref: 'https://github.com/t-Federer/react_04_hangman',
                linkHref: 'https://t-federer.github.io/react_04_hangman/',
                texture: `${base}textures/project/project4.mp4`,
                logo: hangmanLogo,
                logoStyle: {
                        backgroundColor: '#2A1816',
                        border: '0.2px solid #36201D',
                },
                tags: ["Git", "React"],
        },
];

export const workExperiences = [
        {
                id: 1,
                name: 'University of Pisa',
                pos: 'Master\u2019s degree with honors in Digital Humanities',
                duration: '2025',
                title: "Thesis title: \u201CHMR 6-bit Adder, a video game developed by interns and thesis students: proposals on the role of the Scrum Master\u201D.",
                icon: unipiIcon,
        },
        {
                id: 2,
                name: 'University of Pisa',
                pos: 'Scrum Master / Developer (Internship)',
                duration: 'Dec 2024 - Feb 2025',
                title: "Built a Single Page Application with 6 interactive charts summarizing 3.5 years of development for the HMR 6\u2011Bit Adder video game, contributing to both development and team processes. Served as Scrum Master for a 6\u2011member student team, leading biweekly meetings and continuous reviews that improved integration and traceability; the game is still in development.",
                icon: unipiIcon,
        },
        {
                id: 3,
                name: 'University of Pisa',
                pos: 'Bachelor\u2019s degree in Digital Humanities',
                duration: '2021',
                title: "Thesis title: \u201CA historically styled menu system for the virtual replica of the first CEP adder\u201D.",
                icon: unipiIcon,
        },
        {
                id: 4,
                name: 'University of Pisa',
                pos: 'Junior Game Developer (Internship)',
                duration: 'Jan 2020 - Nov 2020',
                title: "Designed the Unreal Engine architecture and integrated a real\u2011time C++ simulator for the HMR 6\u2011Bit Adder video game. Created 1950s\u2011inspired prototype menus that improved usability, and verified stable 60fps across all team hardware.",
                icon: unipiIcon,
        },
];

export const languages = [
        { label: "IT", flag: "it", sublabel: "Native" },
        { label: "EN", flag: "gb", sublabel: "Upper B2" },
        { label: "JP", flag: "jp", sublabel: "N5 (wip)" },
        { label: "FR", flag: "fr", sublabel: "A2" },
        { label: "ES", flag: "es", sublabel: "A1" },
];

export const publicationsList = [
        {
                year: "2025",
                title: "Article",
                published: "Digital History",
                link: "https://www.aracneeditrice.eu/it/pubblicazioni/estratti/10.53136/97912218229846-informatica-di-oggi-per-raccontare-l-informatica-di-ieri-estratto.html",
        },
];
