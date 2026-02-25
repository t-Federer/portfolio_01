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
                path: "src/assets/git.svg",
                label: "Git",
                logoSize: { 
                        mobile: "w-4 h-4", 
                        tablet: "w-4 h-4", 
                        desktop: "w-6.5 h-6.5" 
                },
        },
        {
                path: "src/assets/javascript.svg",
                label: "JavaScript",
                logoSize: { 
                        mobile: "w-3.5 h-3.5", 
                        tablet: "w-3.5 h-3.5", 
                        desktop: "w-5.5 h-5.5" 
                },
        },
        {
                path: "src/assets/tailwindcss.png",
                label: "Tailwind",
                logoSize: { 
                        mobile: "w-3.5 h-3.5", 
                        tablet: "w-3.5 h-3.5", 
                        desktop: "w-5 h-5" 
                },
        },
        {
                path: "src/assets/react.svg",
                label: "React",
                logoSize: { 
                        mobile: "w-4 h-4", 
                        tablet: "w-4 h-4", 
                        desktop: "w-6 h-6" 
                },
        },
        {
                path: "src/assets/threejs_bg.svg",
                label: "Three.js",
                logoSize: { 
                        mobile: "w-3.5 h-3.5", 
                        tablet: "w-3.5 h-3.5", 
                        desktop: "w-5.5 h-5.5" 
                },
        },
        {
                path: "src/assets/sql.svg",
                label: "SQL",
                logoSize: { 
                        mobile: "w-5 h-5", 
                        tablet: "w-5 h-5", 
                        desktop: "w-7 h-7" 
                },
        },
        {
                path: "src/assets/adobe_ai.svg",
                label: "Illustrator",
                logoSize: { 
                        mobile: "w-5 h-5", 
                        tablet: "w-5 h-5", 
                        desktop: "w-6 h-6" 
                },
        },
        {
                path: "src/assets/adobe_lr.svg",
                label: "Lightroom",
                logoSize: { 
                        mobile: "w-5 h-5", 
                        tablet: "w-5 h-5", 
                        desktop: "w-6 h-6" 
                },
        },
        {
                path: "src/assets/adobe_ps.svg",
                label: "PhotoShop",
                logoSize: { 
                        mobile: "w-5 h-5", 
                        tablet: "w-5 h-5", 
                        desktop: "w-6 h-6" 
                },
        },
        {
                path: "src/assets/python.svg",
                label: "Python",
                logoSize: { 
                        mobile: "w-4 h-4", 
                        tablet: "w-4 h-4", 
                        desktop: "w-6 h-6" 
                },
        },
        {
                path: "src/assets/figma.svg",
                label: "Figma",
                logoSize: { 
                        mobile: "w-5 h-5", 
                        tablet: "w-5 h-5", 
                        desktop: "w-7 h-7" 
                },
        },
        {
                path: "src/assets/ue_white.svg",
                label: "Unreal",
                logoSize: { 
                        mobile: "w-4 h-4", 
                        tablet: "w-4 h-4", 
                        desktop: "w-6 h-6" 
                },
        },
        {
                path: "src/assets/blender.svg",
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
                title: 'HMR 6-Bit Adder',
                desc: 'Step inside a virtual reconstruction of the original 1956 laboratory at the University of Pisa, where Italy\u2019s first electronic computer was built.',
                subdesc: 'Discover the test module that became its first working component.',
                codeHref: '',
                linkHref: 'https://www.progettohmr.it/MR-VR/',
                texture: '/textures/project/project1.mp4',
                logo: 'src/assets/hmr6bitadder.png',
                logoStyle: {
                        backgroundColor: '#290A1F',
                        border: '0.2px solid #1C1C21',
                        // boxShadow: '0px 0px 60px 0px #AA3C304D',
                },
                tags: ["Unreal", "Blender", "PhotoShop"],
        },
        {
                title: "Macbook Pro - Landing page (clone)",
                desc: 'A frontend project that recreates an Apple‑style landing page, combining Three.js and GSAP to deliver a clean implementation of interactive 3D elements and smooth animations within a modern UI.',
                subdesc: '',
                codeHref: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
                linkHref: 'https://macbook-clone-landing.vercel.app/',
                texture: '/textures/project/project2.mp4',
                logo: 'src/assets/macbookClone.svg',
                logoStyle: {
                        backgroundColor: '#13202F',
                        border: '0.2px solid #17293E',
                        // boxShadow: '0px 0px 60px 0px #2F6DB54D',
                },
                tags: ["Git", "React", "Tailwind", "Three.js"],
        },
        // {
        //   title: "Google Drive (clone)", 
        //   desc: 'An innovative healthcare platform designed to streamline essential medical processes. ',
        //   subdesc:
        //     'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
        //   codeHref: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        //   linkHref: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        //   texture: '/textures/project/project3.mp4',
        //   logo: 'src/assets/project-logo3.png',
        //   logoStyle: {
        //     backgroundColor: '#60f5a1',
        //     background:
        //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        //     border: '0.2px solid rgba(208, 213, 221, 1)',
        //     // boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        //   },
        //   tags: ["Git", "React", "Tailwind"],
        // },
        {
                title: 'Hangman',
                desc: 'A simple React‑based hangman minigame that uses state and conditional rendering to manage progress, lives, and word reveal. The interface updates smoothly as each guess modifies the game state.',
                subdesc: '',
                codeHref: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
                linkHref: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
                texture: '/textures/project/project4.mp4',
                logo: 'src/assets/hangman.svg',
                logoStyle: {
                        backgroundColor: '#2A1816', //'#0E1F38',
                        border: '0.2px solid #36201D', //#0E2D58',
                        // boxShadow: '0px 0px 60px 0px #2F67B64D',
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
                icon: 'src/assets/unipi_white.svg',
        },
        {
                id: 2,
                name: 'University of Pisa',
                pos: 'Scrum Master / Developer (Internship)',
                duration: 'Dec 2024 - Feb 2025',
                title: "Built a Single Page Application with 6 interactive charts summarizing 3.5 years of development for the HMR 6\u2011Bit Adder video game, contributing to both development and team processes. Served as Scrum Master for a 6\u2011member student team, leading biweekly meetings and continuous reviews that improved integration and traceability; the game is still in development.",
                icon: 'src/assets/unipi_white.svg',
        },
        {
                id: 3,
                name: 'University of Pisa',
                pos: 'Bachelor\u2019s degree in Digital Humanities',
                duration: '2021',
                title: "Thesis title: \u201CA historically styled menu system for the virtual replica of the first CEP adder\u201D.",
                icon: 'src/assets/unipi_white.svg',
        },
        {
                id: 4,
                name: 'University of Pisa',
                pos: 'Junior Game Developer (Internship)',
                duration: 'Jan 2020 - Nov 2020',
                title: "Designed the Unreal Engine architecture and integrated a real\u2011time C++ simulator for the HMR 6\u2011Bit Adder video game. Created 1950s\u2011inspired prototype menus that improved usability, and verified stable 60fps across all team hardware.",
                icon: 'src/assets/unipi_white.svg',
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
                title: "Informatica di oggi per raccontare l\u2019informatica di ieri",
                published: "Digital History",
                link: "https://www.aracneeditrice.eu/it/pubblicazioni/estratti/10.53136/97912218229846-informatica-di-oggi-per-raccontare-l-informatica-di-ieri-estratto.html",
        },
];
