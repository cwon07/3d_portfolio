import car from '../assets/icons/car.svg'
import contact from '../assets/icons/contact.svg'
import css from '../assets/icons/css.svg'
import express from '../assets/icons/express.svg'
import github from '../assets/icons/github.svg'
import html from '../assets/icons/html.svg'
import javascript from '../assets/icons/javascript.svg'
import linkedin from '../assets/icons/linkedin.svg'
import mongodb from '../assets/icons/mongodb.svg'
import nextjs from '../assets/icons/nextjs.svg'
import nodejs from '../assets/icons/nodejs.svg'
import react from '../assets/icons/react.svg'
import angular from '../assets/icons/angular.svg'
import sql from '../assets/icons/sql.svg'
import redux from '../assets/icons/redux.svg'
import sass from '../assets/icons/sass.svg'
import tailwindcss from '../assets/icons/tailwindcss.svg'
import java from '../assets/icons/java.svg'
import firebase from '../assets/icons/firebase.svg'
import motion from '../assets/icons/motion.svg'
import typescript from '../assets/icons/typescript.svg'
import meta from '../assets/images/meta.png'

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "International Student Specialist",
        company_name: "BC Institute of Technology",
        icon: meta,
        iconBg: "#accbe1",
        date: "Dec 2016 - Dec 2023",
        points: [
            "Managed outcome-based evaluations of 400 international student applications on average per term, ensuring strict adherence to criteria and deadlines, resulting in a streamlined application review process.",
            "Contributed to more efficient admissions processes by mastering international admission criteria, policies and procedures, reducing processing time by 20%.",
            "Provided culturally sensitive academic advising to a caseload of 150 students per term, emphasizing diversity and inclusivity, and achieving a notable 90% retention rate for at-risk students through timely interventions.",
        ],
    },
    {
        title: "Customer Service Representative",
        company_name: "TD Canada Trust Bank",
        icon: meta,
        iconBg: "#fbc3bc",
        date: "Jul 2013 - Sep 2015",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/cwon07',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/christinejwong',
    }
];

export const projects = [
    {
        iconUrl: car,
        theme: 'btn-back-red',
        name: 'Wallet Buddy - Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/cwon07/wallet_buddy',
    },
    {
        iconUrl: car,
        theme: 'btn-back-green',
        name: 'Sushiya - Restaurant Website',
        description: 'Designed a modern restaurant website template, implemented AOS for better user engagement and polished design.',
        link: 'https://github.com/cwon07/restaurant_site',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Creme de la Creme - Digital Recipe Box',
        description: 'Designed and built a digital recipe box for finding and saving recipes in one aesthetically pleasing site, streamlining the recipe storing process.',
        link: 'https://github.com/cwon07/project2',
    },

];
