import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "Machine/Deep Learner",
        icon: mobile,
    },
    {
        title: "Graphics Designer",
        icon: backend,
    },
    {
        title: "Pyhton Developer",
        icon: creator,
    },
];

const technologies = [{
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Python",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Java",
        icon: redux,
    },
    {
        name: "Google Cloud",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Flask",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "Premier Pro",
        icon: git,
    },
    {
        name: "Photoshop",
        icon: figma,
    },
    {
        name: "AWS",
        icon: docker,
    },
];

const experiences = [{
        title: "B.Tech in CSE",
        company_name: "Kalinga institute of Industrial Technology",
        icon: starbucks,
        iconBg: "#383E56",
        date: "July 2020 - Present",
        points: [
            "Learn the fundamental principles, theories, and techniques related to CSE, and practical skills needed to design, develop, test, and maintain complex systems and products.",
            "Learn how to work collaboratively in teams, communicate their ideas effectively, and adapt to changing circumstances.",
            "Courses on ethics, communication, leadership, and other topics related to professional development.",
            "Think creatively and take risks. They learn about entrepreneurship, innovation, and commercialization.",
        ],
    },
    {
        title: "Mastery in Python",
        company_name: "Zero to Mastery school",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "March 2020 - Aug 2022",
        points: [
            "Analyze data, create web applications, automate repetitive tasks, and develop problem-solving skills, critical thinking, and analytical reasoning.",
            "AI and ML, learn how to use Python to build neural networks, train models, and process large amounts of data.",
            "Learn how to work collaboratively with others, share code, and contribute to open-source projects and learnt flask and selenium.",
            "Participating in competitive coding competitions like Codechef and practising in Leetcode.",
        ],
    },
    {
        title: "Vidio Editing",
        company_name: "Phil Ebiner, Video School",
        icon: shopify,
        iconBg: "#383E56",
        date: "May 2022 - July 2022",
        points: [
            "Learned how to structure a narrative, choose the right shots, and create a cohesive sequence of events.",
            "Use of specialized software, such as Adobe Premiere Pro and Filmora",
            "Think creatively, develop new ideas, and push the boundaries of what is possible.",
            "Learnt how to review footage, identify errors, and correct mistakes, optimize video for different platforms and audiences, such as social media",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "KIIT DU, Udemy and others",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Dec 2020 - Present",
        points: [
            "Deep understanding of web development technologies, HTML, CSS, JavaScript, and backend languages such as Java, Python.",
            "Working with frameworks like React, Flask, Angular js, AWS.",
            "Learnt how to troubleshoot errors, debug code, and optimize application performance and also learn how to develop strategies for testing and deploying web applications.",
            "learn how to communicate effectively, share ideas, and work together to achieve project goals. They can also learn how to manage project timelines, prioritize tasks, and deliver high-quality work on time.",
        ],
    },
];

const testimonials = [{
        testimonial: "4 star coder with one of the highest rating in my college",
        name: "Codechef",
        designation: "https://www.codechef.com/\nusers/aryan_dev",
        company: "",
        image: "https://cdn.codechef.com/images/cc-logo.svg",
    },
    {
        testimonial: "Black Blet Holder in Martial Arts/ kick boxing/ Karate",
        name: "Shotokan Karate Do Federation of India",
        designation: "",
        company: "Achieved on 2008",
        image: "https://www.skifworld.com/images/SKIF-Logo.png",
    },
    {
        testimonial: "Graphics designer and Web Developer at official society of KIIT",
        name: "KONNEXIONS",
        designation: "Kalinga Institute of Industrial Technology",
        company: "",
        image: "https://yellow.place/file/image/thumb/0/0/256/houirermxsmikmjz.jpg",
    },
];

const projects = [{
        name: "RAPTOR",
        description: "A voice assistant from scratch in python using Google API, Selenium, Web Scraping which can reply to your commands, search definations in wikipedia, and reply required lines via voice. It can search any video on YouTube on your PC. It can translate voice commands to any famous language and speak in male or female voice.",
        tags: [{
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "google api",
                color: "green-text-gradient",
            },
            {
                name: "selenium",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/aryan-skywalker/RAPTOR.git",
    },
    {
        name: "Time Table Links",
        description: "Introducing a sophisticated Time Table extension. This powerful time management tool promises to streamline your daily routine and expertly crafted with HTML, Css, Js, NodeJS, which seamlessly integrates within any browser via extension and every column has relevent links to scheduled meetings or zoom classes.",
        tags: [{
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/aryan-skywalker/Time-Table-Links.git",
    },
    {
        name: "Face Classification",
        description: "A deep learning project is an integration of models where it identifies the face which is entered into dataset and predicts its age and gender, the emotions which are expressed by the face and whether the human is wearing a mask or not. This jupyter file is trained with 50000+ keras models to predict with accuracy.",
        tags: [{
                name: "cnn",
                color: "blue-text-gradient",
            },
            {
                name: "tensorflow",
                color: "green-text-gradient",
            },
            {
                name: "pandas",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/aryan-skywalker/face_recognition.git",
    },

];

export { services, technologies, experiences, testimonials, projects };