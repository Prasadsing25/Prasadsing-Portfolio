//Skills Section logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import pythonLogo from "./assets/tech_logo/python.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import linuxLogo from "./assets/tech_logo/linux.png"
import jsonLogo from "./assets/tech_logo/json.png";
import vercelLogo from "./assets/tech_logo/vercel.png";


//Certificate Section Logo's
import nptelLogo from "./assets/cert_logo/nptel.png";
import sololearnLogo from "./assets/cert_logo/sololearn.png";
import udemyLogo from "./assets/cert_logo/udemy.png";
import ybiLogo from "./assets/cert_logo/ybi.png";


//Education Section Logo's
import sscLogo from "./assets/education_logo/ssc.png";
import hscLogo from "./assets/education_logo/hsc.png";
import sandipLogo from "./assets/education_logo/sandip.jpg";


//Projects Section Logo's
import wanderlustLogo from "./assets/work_logo/Wanderlust.png";
import tradeflowLogo from "./assets/work_logo/tradeflowLogo.png";
import myportfolioLogo from "./assets/work_logo/myportfolio.jpg";
import weatherappLogo from "./assets/work_logo/WeatherApp.png";
import TaskReminder from "./assets/work_logo/TaskReminder.png";

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


export const Certificates = [
    {
        id: 0,
        img: nptelLogo,
        name: "Entrepreneurship Essentials",
        date: "May 2025",
        desc: "This course introduces the fundamental concepts of entrepreneurship and business creation",
        skills: [
            "business creation",
            "Business Model development",
            "Entrepreneurship Essentials"
        ]
    },
    {
        id: 1,
        img: sololearnLogo,
        name: "Web Developement",
        date: "August 2025",
        desc: "This course provides a strong foundation in front-end and back-end web technologies.",
        skills: [
            "HTML",
            "CSS",
            "JAVASCRIPT",
            "NODE JS",
            "EXPRESS",
            "MongoDB"
        ]
    },
    {
        id: 2,
        img: udemyLogo,
        name: "Python Course",
        date: "FEB 2024",
        desc: "This course introduces core Python programming concepts, including data types, control structures, functions.",
        skills: [
            "Python Programming"
        ]
    },
    {
        id: 3,
        img: ybiLogo,
        name: "Cloud Computing and Big Data",
        date: "JUNE 2023",
        desc: "This course provided hands-on knowledge of cloud computing concepts, virtualization, and distributed storage.",
        skills: [
            "Linux",
            "Google Colab",
            "Cloud Computing"
        ]
    }
];


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
        title: "TradeFlow - A Stock Trading App",
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
        title: "Task Reminder Extension",
        description: 
           "A simple and stylish Chrome extension built with HTML, CSS, and JavaScript that lets users add, manage, and get notified about tasks—right from their browser. Stay organized, never miss a task!",
        img: TaskReminder,
        tags: ["HTML", "CSS", "JAVAScript"],
        github: "https://github.com/Prasadsing25/Task-Reminder-Extension",
        webapp: "https://wanderlust-project-296s.onrender.com"
    },
];