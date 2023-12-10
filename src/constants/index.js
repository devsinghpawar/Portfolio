import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  codev,
  reactjs,
  redux,
  tailwind,
  wildOasis,
  libraries,
  react,
  gcloth,
  versionControl,
  stateManagement,
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
    title: "Front-end",
    icon: web,
  },
  {
    title: "State Mangement",
    icon: mobile,
  },
  {
    title: "UI Libraries",
    icon: backend,
  },
  {
    title: "Version control",
    icon: creator,
  },
];

const technologies = [
  {
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "React.js",
    company_name: "Basics",
    icon: react,
    iconBg: "#383E56",
    // date: "",
    points: [
      "React Router: Proficiently implementing React Router for seamless navigation within web applications.",
      "Higher-Order Components (HOCs): Leveraging Higher-Order Components for code reuse and logic sharing among components.",
      "React DevTools: Effectively using React DevTools for debugging, profiling, and gaining insights into application performance",
      "Basic Features: Hooks, Props, Virtual DOM, JSX, etc.",
    ],
  },
  {
    title: "State Managment",

    icon: stateManagement,
    iconBg: "#E6DEDD",
    // date: "",
    points: [
      "Redux Mastery: Demonstrating expertise in Redux for centralized state management, ensuring predictability and scalability in complex applications.",
      "Context API Proficiency: Creating a global state container, enabling efficient data sharing across components.",
      "React Query Proficiency: Managing asynchronous data and caching, which enhances data fetching and management within React applications.",
    ],
  },
  {
    title: "UI Libraries",

    icon: libraries,
    iconBg: "#383E56",
    // date: "",
    points: [
      "Material Design Proficiency: Using MUI to create visually appealing, consistent, and user-friendly interfaces.",
      "Tailwind CSS: Utilizing Tailwind CSS to rapidly develop responsive and highly customizable user interfaces, with a focus on utility classes for efficiency.",
      "Styled-Components: For dynamic styling and theming, promoting a component-driven approach to CSS-in-JS for better maintainability",
    ],
  },
  {
    title: "Version control and tools",

    icon: versionControl,
    iconBg: "#E6DEDD",
    // date: "",
    points: [
      "NPM: Proficiency in managing project dependencies, ensuring efficient package management and code reuse.",
      "Git & GitHub: Mastery of Git for version control and GitHub for collaborative development, including pull requests, issues, and best practices for team collaboration.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Gcloth",
    description:
      "Hyper-Local e-commerce platform that allows nearby vendors to create their online presence and sell directly to local customers, we also manage deliveries ",
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
        name: "redux-toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: gcloth,
    source_code_link: "",
    // source_code_link: window.alert(
    //   "It's a private , lets met and talk about it in the interview"
    // ),
    project_link: "http://3.111.246.202/",
  },
  {
    name: "Wild oasis",
    description:
      "A property management system for efficiently managing various aspects of Hotels, such as bookings, cabin managment, and financial operations.",
    tags: [
      {
        name: "react",
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
    image: wildOasis,
    source_code_link: "https://github.com/devsinghpawar/WILD-OASIS",
    project_link: "https://wild-oasis-hotel-world.netlify.app",
  },
  {
    name: "Codev",
    description:
      "Codev is a web-based online code editor that allows users to create HTML, CSS, and JavaScript code with live previews with instant updates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "context-api",
        color: "pink-text-gradient",
      },
    ],
    image: codev,
    source_code_link: "https://github.com/devsinghpawar/Codev",
    project_link: "https://codevpen.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
