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
  carrent,
  jobit,
  tripguide,
  threejs,
  apple,
  talkernetwork,
  trl11,
  pandas,
  cpp,
  swift,
  python,
  sql,
} from "../assets";

export const navLinks = [
  {
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

const services = [
  {
    title: "Full Stack Experience",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Startup and Corporate Background",
    icon: backend,
  },
  {
    title: "AI/ML Emphasis",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C/C++",
    icon: cpp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "TRL11",
    icon: trl11,
    iconBg: "#FFFFFF",
    date: "June 2024 - September 2024",
    points: [
      "Architected a scalable database migration framework for SQLite and NoSQL schemas, ensuring seamless version upgrades and rollbacks with SQLAlchemy and FastAPI endpoints.",
      "Enabled real-time TCP network camera browsing and memory optimization, improving CPU system stability by 33% through efficient throttling and memory management.",
      "Boosted OS maintenance efficiency by 25% by developing import/export and factory reset features, enhancing Bash scripts, and automating .deb file depackaging and installation.",
      "Augmented the Power Management Unit (PMU) Utility with additional C++ functions and Python bindings, improving power management efficiency by 20%."
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Apple",
    icon: apple,
    iconBg: "#E6DEDD",
    date: "January 2024 - May 2024",
    points: [
      "Spearheaded the migration of front-end frameworks into modular library dependencies, increasing code reusability by 33% for front-end and 10% for back-end operations.",
      "Designed and deployed a location tracking feature in a master module, increasing retail check-in efficiency by 30% through real-time automation.",
      "Improved retail employee project assignment by developing a SwiftUI ‘Task’ page with Gantt Chart and Kanban UI, enhancing project management efficiency.",
      "Optimized SQL operations in the internal CRM app 'Contact', reducing load and response times by 20% through comprehensive testing and subquery optimization."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Talker.Network",
    icon: talkernetwork,
    iconBg: "FFFFFF",
    date: "July 2023 - August 2023",
    points: [
      "Enhanced marketing program visibility by 15% through the migration from HTML/CSS/JS to React.js and the development of a settings dashboard in Flask.",
      "Designed a Node.js security API and enabled HTTPS for HTTP servers, fixing 86 common vulnerabilities in microservices and improving overall security.",
      "Streamlined account management by 30% through the development of an Admin dashboard for user activity monitoring and web functionality configuration.",
      "Reworked HTTP logic to default to HTTP with an on-demand switch to HTTPS, enhancing security while maintaining network protocol flexibility."
    ],
  },  
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
