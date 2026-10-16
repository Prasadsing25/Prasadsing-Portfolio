//Skills Section logo's
import htmlLogo from "./assets/tech_logo/html.avif";
import cssLogo from "./assets/tech_logo/css.avif";
import javascriptLogo from "./assets/tech_logo/javascript.avif";
import reactLogo from "./assets/tech_logo/reactjs.avif";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.avif";
import materialuiLogo from "./assets/tech_logo/materialui.avif";
import bootstrapLogo from "./assets/tech_logo/bootstrap.avif";
import nodejsLogo from "./assets/tech_logo/nodejs.avif";
import expressLogo from "./assets/tech_logo/express.avif";
import mysqlLogo from "./assets/tech_logo/mysql.avif";
import mongodbLogo from "./assets/tech_logo/mongodb.avif";
import pythonLogo from "./assets/tech_logo/python.avif";
import javaLogo from "./assets/tech_logo/java.avif";
import gitLogo from "./assets/tech_logo/git.avif";
import githubLogo from "./assets/tech_logo/github.avif";
import vscodeLogo from "./assets/tech_logo/vscode.avif";
import postmanLogo from "./assets/tech_logo/postman.avif";
import netlifyLogo from "./assets/tech_logo/netlify.avif";
import linuxLogo from "./assets/tech_logo/linux.webp";
import jsonLogo from "./assets/tech_logo/json.avif";
import vercelLogo from "./assets/tech_logo/vercel.avif";
export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            {name: 'HTML', logo: htmlLogo},
            {name: 'CSS', logo: cssLogo},
            {name: 'JAVASCRIPT', logo: javascriptLogo},
            {name: 'React JS', logo: reactLogo},
            {name: 'Tailwind CSS', logo: tailwindcssLogo},
            {name: 'Material UI', logo: materialuiLogo},
            {name: 'Bootstrap', logo: bootstrapLogo},
        ],
    },
    {
        title: 'Backend',
        skills: [
            {name: 'Node JS', logo: nodejsLogo},
            {name: 'Express JS', logo: expressLogo},
            {name: 'MYSQL', logo: mysqlLogo},
            {name: 'MongoDB', logo: mongodbLogo},
        ],
    },
    {
        title: 'Languages',
        skills: [
            {name: 'JavaScript', logo:javascriptLogo},
            {name: 'Python', logo: pythonLogo},
            {name: 'Java', logo: javaLogo}
        ],
    },
    {
        title: 'Tools',
        skills: [
            {name: 'Git', logo: gitLogo},
            {name: 'GitHub', logo: githubLogo},
            {name: 'Linux', logo: linuxLogo},
            {name: 'VS Code', logo: vscodeLogo},
            {name: 'Postman', logo: postmanLogo},
            {name: 'Netlify', logo: netlifyLogo},
            {name: 'Json', logo: jsonLogo},
            {name: 'Vercel', logo: vercelLogo}
        ],
    },
];



//Certificate Section Logo's
import nptelLogo from "./assets/cert_logo/nptel.avif";
import sololearnLogo from "./assets/cert_logo/sololearn.avif";
import udemyLogo from "./assets/cert_logo/udemy.avif";
import ybiLogo from "./assets/cert_logo/ybi.avif";
import hackerrank from "./assets/cert_logo/hackerrank.avif";
export const Certificates = [
    {
        id: 0,
        img: nptelLogo,
        name: "Entrepreneurship Essentials",
        date: "May 2025",
        desc: "Learn fundamental concepts of entrepreneurship.",
        skills: [
            "Digital Marketing",
            "Buisness Developement"
        ],
        pdf: "https://drive.google.com/file/d/1giOwwtCkiLTwd3Ynpzc8NlI3ka9ZPsn0/view?usp=drive_link"
    },
    {
        id: 1,
        img: hackerrank,
        name: "Frontend Developer (React)",
        date: "Jan 2026",
        desc: "HackerRank profile will now showcase Frontend Developer (React) as a verified asset.",
        skills: [
            "React",
            "Javascript",
            "CSS"
        ],
        pdf: "https://www.hackerrank.com/certificates/iframe/f5cad1045366"
    },
    {
        id: 2,
        img: sololearnLogo,
        name: "Web Developement",
        date: "August 2025",
        desc: "Learned front-end and back-end web technologies.",
        skills: [
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "NODE JS",
            "EXPRESS",
            "MongoDB"
        ],
        pdf: "https://drive.google.com/file/d/1J-cwBcQ9LjzkRLf1co3H8jluL8qB-g07/view?usp=drive_link"
    },
    {
        id: 3,
        img: udemyLogo,
        name: "Python Course",
        date: "FEB 2024",
        desc: "Learned Python programming concepts",
        skills: [
            "Python"
        ],
        pdf: "https://drive.google.com/file/d/18txEjBEkPAO80vFrkv0fu4MKZJOqw6Up/view?usp=drive_link"
    },
    {
        id: 4,
        img: ybiLogo,
        name: "Cloud Computing and Big Data",
        date: "JUNE 2023",
        desc: "Get hands on experience of cloud computing concepts, virtualization.",
        skills: [
            "Linux",
            "Google Colab",
            "Cloud Computing"
        ],
        pdf: "https://drive.google.com/file/d/1gtxYZM4zUxqSALMYneDQ-e6V4u6ZouKY/view?usp=drive_link"
    },
    {
        id: 5,
        img: sololearnLogo,
        name: "LLM",
        date: "DEC 2025",
        desc: "This course provided certificate of completion about Introduction to Large Language Model.",
        skills: [
            "LLM",
            "AI Tools",
            "AI"
        ],
        pdf: "https://drive.google.com/file/d/1gtxYZM4zUxqSALMYneDQ-e6V4u6ZouKY/view?usp=drive_link"
    }
];



//Education Section Logo's
import sscLogo from "./assets/education_logo/ssc.webp";
import hscLogo from "./assets/education_logo/hsc.webp";
import sandipLogo from "./assets/education_logo/sandip.webp";
export const education = [
    {
        id: 0,
        img: sscLogo,
        school: "Swami Vivekananda Vidyalaya",
        date: "April 2019 - March 2020",
        grade: "86.20 %",
        desc: "I completed my class 10 education from Swami Vivekananda Vidyalaya, Sillod, under the State board, where I studied Science with Computer.",
        degree: "SSC (X) - Science with Computer Applications",
    },
    {
        id: 1,
        img: hscLogo,
        school: "Saraswati Junior College",
        date: "April 2021 - March 2022",
        grade: "82.00 %",
        desc: "I completed my class 12 education from Saraswati Junior College, Sillod, under the State board, where I studied Science with Computer.",
        degree: "HSC (XII) - PCMB with Computer Science",
    },
    {
        id: 2,
        img: sandipLogo,
        school: "Sandip University",
        date: "July 2022 - June 2026",
        grade: "8.60 GPA",
        desc: "I currently pursuing my B.Tech in Computer Science and Engineering with specialization in Cloud Technology and Information Security from Sandip University, Nashik.",
        degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
    }
];



//Projects Section Logo's
import wanderlustLogo from "./assets/work_logo/Wanderlust.avif";
import tradeflowLogo from "./assets/work_logo/tradeflowLogo.avif";
import myportfolioLogo from "./assets/work_logo/myportfolio.avif";
import weatherappLogo from "./assets/work_logo/WeatherApp.avif";
import TaskReminder from "./assets/work_logo/TaskReminder.avif";
import taskManagerLogo from "./assets/work_logo/TaskManager.avif";
export const Projects = [
    {
        id: 0,
        title: "WanderLust",
        description: 
           "WanderLust is a robust, full-stack web application that enables users to explore, list, and holiday rentals—ranging from cabins and beach houses to villas and farm stays.",
        img: wanderlustLogo,
        tags: ["HTML", "CSS", "JAVAScript", "Node Js", "Express", "EJS"],
        github: "https://github.com/Prasadsing25/Wanderlust-project",
        webapp: "https://wanderlust-project-296s.onrender.com"
    },
    {
        id: 1,
        title: "TradeFlow",
        description: 
           "This project presents TradeFlow, an online stock trading simulation platform designed to provide users with a risk-free environment to learn and practice trading. The platform allows users to register, manage portfolios, monitor stock prices, create watchlists, and execute simulated buy/sell transactions.",
        img: tradeflowLogo,
        tags: ["React JS", "JAVAScript", "Bootstrap", "REST API", "Node.js", "Express.js", "MongoDB", "JEST"],
        github: "https://github.com/Prasadsing25/Tradeflow-",
        webapp: "https://tradeflow-frontend.onrender.com"
    },
    {
        id: 2,
        title: "My Portfolio",
        description: 
           "My portfolio site is a modern, responsive web application built to showcase my skills, projects, and achievements as a full‑stack developer. Designed with a clean and professional UI, it highlights both technical expertise and creative design sense, giving visitors an engaging experience.",
        img: myportfolioLogo,
        tags: ["JAVAScript", "Tailwind CSS", "React Js", "Email Js"],
        github: "https://github.com/Prasadsing25/Prasadsing-Portfolio",
        webapp: "https://prasadsing-portfolio.vercel.app/"
    },
    {
        id: 3,
        title: "WeatherApp",
        description: 
           "A responsive web application that fetches real-time weather data from the OpenWeatherMap API. The app allows users to search for any city worldwide and displays key details such as temperature, humidity, wind speed, and weather conditions with dynamic icons.",
        img: weatherappLogo,
        tags: ["HTML", "CSS", "JAVAScript", "React JS", "API"],
        github: "https://github.com/Prasadsing25/Wanderlust-project",
        webapp: "https://wanderlust-project-296s.onrender.com"
    },
    {
        id: 4,
        title: "Task Manager App",
        description: 
           "The Task Manager App is a responsive and user-friendly web application designed to help users efficiently organize, track, and manage their daily tasks with a clean interface and seamless functionality.",
        img: taskManagerLogo,
        tags: ["React", "CSS", "JAVAScript"],
        github: "https://github.com/Prasadsing25/Task-Manager-App",
        webapp: "https://task-manager-app-neon-five.vercel.app/"
    },
    {
        id: 5,
        title: "Task Reminder Extension",
        description: 
           "A simple and stylish Chrome extension built with HTML, CSS, and JavaScript that lets users add, manage, and get notified about tasks—right from their browser. Stay organized, never miss a task!",
        img: TaskReminder,
        tags: ["HTML", "CSS", "JAVAScript"],
        github: "",
        webapp: ""
    },
];