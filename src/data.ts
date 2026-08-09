// Portfolio Data for Diptendu Barman
import type {
  AboutMe,
  Education,
  ExperienceItem,
  LeadershipItem,
  PersonalInfo,
  Project,
  Skills,
} from "./types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Diptendu Barman",
  title: "Team Lead Full Stack Developer",
  tagline: "Building scalable, real-time, and high-performance applications.",
  email: "dip.codes9@gmail.com",
  phone: "+91 8350051926",
  location: "Kolkata, India",
  linkedin: "https://in.linkedin.com/in/diptendu-barman",
  github: "https://github.com/diptendubarman",
  resumeUrl: "/Resume_DiptenduBarman.pdf",
  heroText:
    "Driving digital transformation through user-centered design and scalable engineering.",
};

export const aboutMe: AboutMe = {
  summary: `Team Lead Full Stack Developer with 5+ years of experience building scalable systems across Healthcare, E-Commerce, Security, and HR Tech domains. Expert in React, Vue.js, Node.js, NestJS, and FastAPI with strong proficiency in DevOps practices, CI/CD pipelines, and cloud infrastructure.`,
  description: `I drive digital transformation through user-centered design and innovative front-end and back-end engineering, delivering seamless, scalable, and engaging applications. I spearhead cross-functional collaboration & Agile practices to accelerate product delivery timelines, optimize workflow, and foster a high-performance engineering culture.`,
  highlights: [
    "Led engineering teams through complex technical challenges",
    "Designed scalable architectures handling thousands of concurrent events",
    "Championed agile transformation with 45% faster delivery",
    "Expert in system design and performance optimization",
  ],
};

export const skills: Skills = {
  frontend: {
    title: "Frontend",
    items: [
      "React",
      "Vue.js",
      "Angular",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "TypeScript",
    ],
  },
  backend: {
    title: "Backend",
    items: ["Node.js", "NestJS", "FastAPI", "Express.js", "Python", "Go"],
  },
  databases: {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  devops: {
    title: "DevOps",
    items: ["Docker", "Jenkins", "NGINX", "CI/CD", "Git"],
  },
  cloud: {
    title: "Cloud & Messaging",
    items: ["AWS", "Azure", "RabbitMQ", "Kafka", "WebSockets"],
  },
  apis: {
    title: "APIs",
    items: ["REST", "GraphQL", "OpenAI API", "Socket.IO"],
  },
};

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Magicmind Technologies",
    location: "Kolkata",
    role: "Team Lead Full Stack Developer",
    period: "Jul 2023 – Present",
    type: "current",
    responsibilities: [
      "Leading development team through complex technical challenges, enforcing coding best practices",
      "Designing & delivering scalable front-end and back-end solutions with cross-functional teams",
      "Owning full software development lifecycle from requirements to deployment & optimization",
      "Driving code reviews, CI/CD automation, and performance tuning",
      "Mentoring developers and aligning technical roadmaps with business objectives",
    ],
    achievements: [
      {
        metric: "45%",
        description: "faster delivery through agile transformation",
      },
      { metric: "60%", description: "boost in user engagement" },
      {
        metric: "65%",
        description: "reduction in deployment cycles via CI/CD",
      },
    ],
  },
  {
    id: 2,
    company: "Han River Technology",
    location: "Kolkata",
    role: "Associate Team Lead",
    period: "Feb 2022 – Jun 2023",
    type: "past",
    responsibilities: [
      "Contributed to full-stack development of web applications with robust interfaces",
      "Authored and optimized application code ensuring compliance with industry standards",
      "Resolved complex software issues through systematic troubleshooting",
      "Facilitated migration of legacy systems to modern web platforms",
    ],
    achievements: [
      { metric: "Improved", description: "system performance and scalability" },
      {
        metric: "Enhanced",
        description: "user experience through modernization",
      },
    ],
  },
  {
    id: 3,
    company: "Softhills Technologies",
    location: "Cooch Behar",
    role: "Full Stack Developer",
    period: "Mar 2019 – Feb 2022",
    type: "past",
    responsibilities: [
      "Directed end-to-end software development lifecycle from conceptualization to deployment",
      "Pioneered development and integration of front-end & back-end components",
      "Executed rigorous quality assurance protocols",
      "Liaised with clients to capture requirements and deliver tailored solutions",
    ],
    achievements: [
      { metric: "End-to-end", description: "architecture ownership" },
      { metric: "Quality", description: "assurance excellence" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "No-Code/Low-Code Code Gen Engine",
    description:
      "Led a 6-member team to build a no-code platform for template-based UI customization and auto-generation of full-stack applications. Designed event-driven architecture with RabbitMQ for async workflows.",
    technologies: [
      "FastAPI",
      "RabbitMQ",
      "PostgreSQL",
      "MongoDB",
      "TypeScript",
      "Python",
    ],
    metrics: [
      "50% reduction in manual setup time",
      "Multi-tenant architecture",
    ],
    category: "Platform",
    featured: true,
  },
  {
    id: 2,
    title: "AVP Suite – Browser Security Extension",
    description:
      "Led 5-member team developing a full-stack browser security ecosystem with Admin/User Dashboards, real-time threat detection using IPqualityScore, Google Web Risk, VirusTotal, and ClamAV.",
    technologies: [
      "React",
      "Node.js",
      "Plasmo",
      "Redis",
      "Socket.IO",
      "Jenkins",
    ],
    metrics: ["40% faster threat response", "Real-time alert system"],
    category: "Security",
    featured: true,
  },
  {
    id: 3,
    title: "Kaayu – Recruitment System",
    description:
      "Architected scalable recruitment management platform with Python-based ATS and resume parsing engine for automated candidate evaluation and data extraction.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "Python",
      "MySQL",
      "Jenkins",
    ],
    metrics: ["Automated candidate processing", "SEO-friendly interfaces"],
    category: "HR Tech",
    featured: true,
  },
  {
    id: 4,
    title: "MagicHR – HRMS Platform",
    description:
      "Led 9-member team to design feature-rich HRMS with payroll, attendance, leave, and task management modules. Implemented RBAC and Redis caching for performance.",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Express.js",
      "MySQL",
      "Redis",
    ],
    metrics: ["Improved HR operations efficiency", "Role-based access control"],
    category: "HR Tech",
    featured: false,
  },
  {
    id: 5,
    title: "Desk Monitor – Employee Tracking",
    description:
      "Architected real-time employee monitoring service with NestJS backend, Kafka for event-driven processing, supporting thousands of concurrent monitoring events per second.",
    technologies: ["NestJS", "Kafka", "PostgreSQL", "GraphQL", "Next.js"],
    metrics: [
      "Thousands of concurrent events/sec",
      "Real-time activity visualization",
    ],
    category: "Enterprise",
    featured: true,
  },
  {
    id: 6,
    title: "Stylemate – Fashion E-Commerce",
    description:
      "Full-stack development of modern fashion e-commerce platform with Vue.js frontend and GraphQL API. Integrated Facebook Graph API for social engagement.",
    technologies: ["Vue.js", "Node.js", "GraphQL", "MongoDB", "TypeScript"],
    metrics: ["30% faster page loads", "Enhanced social engagement"],
    category: "E-Commerce",
    featured: false,
  },
  {
    id: 7,
    title: "Industry ERP with Hardware Integration",
    description:
      "End-to-end industry management ERP integrating weighbridge hardware using Electron.js and Node-SerialPort. Built modules for payroll, attendance, and P&L reporting.",
    technologies: [
      "Next.js",
      "Electron.js",
      "Node-SerialPort",
      "PostgreSQL",
      "MySQL",
    ],
    metrics: [
      "50% operational efficiency gain",
      "Hardware-software integration",
    ],
    category: "Enterprise",
    featured: true,
  },
];

export const leadership: LeadershipItem[] = [
  {
    icon: "Users",
    title: "Team Mentoring",
    description:
      "Mentored developers across multiple projects, fostering skill growth and technical excellence",
  },
  {
    icon: "Zap",
    title: "Agile Transformation",
    description:
      "Championed agile practices driving 45% acceleration in delivery timelines",
  },
  {
    icon: "GitBranch",
    title: "CI/CD Automation",
    description:
      "Engineered streamlined pipelines cutting deployment cycles by 65%",
  },
  {
    icon: "Layout",
    title: "Architecture Design",
    description:
      "Designed scalable microservices and event-driven architectures",
  },
  {
    icon: "Gauge",
    title: "Performance Optimization",
    description: "Optimized applications for high throughput and low latency",
  },
  {
    icon: "Target",
    title: "Strategic Alignment",
    description:
      "Aligned technical roadmaps with business objectives through stakeholder engagement",
  },
];

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Camellia Institute of Engineering and Technology, Kolkata",
    year: "2025",
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "Camellia Institute of Engineering and Technology, Kolkata",
    year: "2021",
  },
  {
    degree: "Diploma in Computer Application",
    institution: "Mahatma Gandhi Youth Computer Education",
    year: "2018",
  },
];

export const coreCompetencies: string[] = [
  "Scalable Application Architecture",
  "User Experience Design",
  "Agile Project Management",
  "Software Quality Assurance",
  "CI/CD Pipeline",
  "Cloud Infrastructure Management",
  "API Development and Integration",
  "Performance Optimization",
  "Team Leadership and Mentorship",
  "System Design Principles",
];
