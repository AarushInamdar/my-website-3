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
  threejs,
  apple,
  talkernetwork,
  trl11,
  pandas,
  cpp,
  swift,
  python,
  sql,
  ethpredictor,
  cinemaTrends,
  realEstateXplorer,
  shadowCalculator,
  cryptoApp,
  ticTacToe
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
    iconBg: "FFFFFFF",
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
    name: "Ethereum Price Predictor",
    description:
      "A Python-based application that forecasts Ethereum prices using Prophet and NumPy. This project demonstrates the ability to handle large datasets, perform hyperparameter tuning, and generate accurate predictions with visualized trends.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "prophet",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "pink-text-gradient",
      },
    ],
    image: ethpredictor,
    source_code_link: "https://github.com/AarushInamdar/EthereumPricePredictor/tree/main",
  },
  {
    name: "DataAlchemy: Cinema Trends Analyzer",
    description:
      "A data analysis tool that visualizes cinema trends using Python libraries such as Pandas and Seaborn. The app can analyze relationships between various factors, such as revenue, movie duration, and director influence, providing valuable insights.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "seaborn",
        color: "pink-text-gradient",
      },
    ],
    image: cinemaTrends,
    source_code_link: "https://github.com/AarushInamdar/data-analytics-visualizer",
  },
  {
    name: "Real Estate Xplorer",
    description:
      "A Next.js web application for property buyers that features dynamic property filtering, geolocation-based search, and seamless API integrations. The project showcases proficiency in React and backend development with optimized search functionality.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: realEstateXplorer,
    source_code_link: "https://github.com/AarushInamdar/Real-Estate-Website",
  },
  {
    name: "3D Graphics Shadow and Brightness Calculator",
    description:
      "A Python project utilizing NumPy to calculate the brightness and shadow effects on 3D geometric objects. This project highlights skills in mathematical modeling, 3D graphics rendering, and performance optimization for spatial data structures.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "numpy",
        color: "green-text-gradient",
      },
      {
        name: "3d-graphics",
        color: "pink-text-gradient",
      },
    ],
    image: shadowCalculator,
    source_code_link: "https://github.com/AarushInamdar/Graphical-Mesh-Shadow-and-Brightness-Calculator",
  },
  {
    name: "CryptoApp",
    description:
      "A React.js application that ranks and displays cryptocurrency market performance, with interactive trend visualizations and real-time updates. This project emphasizes the use of Redux for state management and server-side rendering for performance.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: cryptoApp,
    source_code_link: "https://github.com/AarushInamdar/CryptoApp",
  },
  {
    name: "Two-Player Tic Tac Toe GUI",
    description:
      "A Python-based Tic Tac Toe game featuring a graphical user interface (GUI) for two players. This project showcases skills in Python GUI development using libraries such as Tkinter, and emphasizes user interaction and game logic implementation.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "gui",
        color: "pink-text-gradient",
      },
    ],
    image: ticTacToe,
    source_code_link: "https://github.com/AarushInamdar/two-player-tic-tac-toe-gui"
  },
];

export { services, technologies, experiences, projects };
