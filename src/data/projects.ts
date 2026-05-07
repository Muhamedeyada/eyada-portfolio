export interface Project {
  _id?: string;
  id?: number; // For backward compatibility
  title: string;
  description: string;
  cover: string | null;
  images: string[] | null;
  video: string | null;
  tags: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  category: "frontend" | "fullstack";
}

// Default projects data (will be replaced with API data)
export const projectsData: Project[] = [
  {
    id: 1,
    title: "Car Rental System",
    description:
      "A comprehensive car rental platform built with Angular, featuring RxJS for state management, i18next for internationalization, and Role-Based Access Control (RBAC).",
    cover: "/car_rental.jpg",
    images: ["/car_rental.jpg"],
    video: null,
    tags: ["Angular", "RxJS", "Tailwind CSS", "i18next", "RBAC"],
    githubUrl: "https://github.com/Muhamedeyada/Car-Rental-System",
    liveUrl: "https://car-rental-system-gilt.vercel.app/",
    category: "fullstack",
  },
  {
    id: 2,
    title: "ClinixPro (Healthcare Patient Management System)",
    description:
      "A comprehensive healthcare management system built with Next.js, featuring patient records, appointment scheduling, and secure data handling using Appwrite.",
    cover: "/clinixpro.jpg",
    images: ["/clinixpro.jpg"],
    video: null,
    tags: ["Next.js", "React.js", "Appwrite", "Tailwind CSS", "Zod"],
    githubUrl: "https://github.com/Muhamedeyada/clinixpro",
    liveUrl: "https://clinixpro-kappa.vercel.app/",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Multi-Tenant ERP System (Accounting Module)",
    description:
      "A scalable ERP solution for accounting, supporting multi-tenancy. Built with NestJS and PostgreSQL for a robust backend and React for the frontend.",
    cover: "/erp.jpg",
    images: ["/erp.jpg"],
    video: null,
    tags: ["React.js", "NestJS", "PostgreSQL", "Prisma", "TypeScript"],
    githubUrl: "https://github.com/Muhamedeyada/erp-system",
    liveUrl: "https://erp-frontend-one-sigma.vercel.app/",
    category: "fullstack",
  },
  {
    id: 4,
    title: "Real Time Chat Application",
    description:
      "A real-time messaging platform using WebSockets, Node.js, and PostgreSQL to ensure fast and reliable communication.",
    cover: "/chat.jpg",
    images: ["/chat.jpg"],
    video: null,
    tags: ["React.js", "Node.js", "PostgreSQL", "Express.js", "WebSockets"],
    githubUrl: "https://github.com/Muhamedeyada/Real-time-chat",
    liveUrl: "#",
    category: "fullstack",
  },
  {
    id: 5,
    title: "Toyzcity",
    description:
      "Toyzcity allows users to list, buy, and trade toys in a secure, user-friendly environment. It's a full-stack application.",
    cover: "/toyzcity.png",
    images: ["/toyzcity.png"],
    video:
      "https://www.linkedin.com/posts/mohamed-eyada_toyzcity-graduationproject-mernstack-activity-7275075286948356096-WsAY/",
    tags: ["React", "Node.js", "MongoDB", "Web"],
    githubUrl: "https://github.com/Muhamedeyada/toy-treasures-frontend",
    liveUrl: "https://toy-treasures-frontend-rbrk.vercel.app/",
    category: "fullstack",
  },
  {
    id: 6,
    title: "GitHub-like App",
    description:
      "A clone of GitHub features including repository exploration, user profiles, and activity tracking, using Passport.js for authentication.",
    cover: "/github_clone.jpg",
    images: ["/github_clone.jpg"],
    video: null,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Passport.js"],
    githubUrl: "https://github.com/Muhamedeyada",
    liveUrl: "https://github-project-tan.vercel.app/",
    category: "fullstack",
  },
  {
    id: 7,
    title: "Blog Platform",
    description:
      "A full-featured blog platform where users can create, read, update, and delete posts, built with the MERN stack.",
    cover: "/blog.png",
    images: ["/blog.png"],
    video: null,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/Muhamedeyada/ReactBlog",
    liveUrl: "https://reactblog.vercel.app/",
    category: "fullstack",
  },
  {
    id: 8,
    title: "SupplMart E-commerce",
    description:
      "An e-commerce platform built with Angular, featuring product listings, shopping cart, and a modern UI.",
    cover: "supplmart.png",
    images: ["supplmart.png"],
    video:
      "https://www.linkedin.com/posts/mohamed-eyada_ecommerce-webdevelopment-angular18-activity-7251952102111903744-rOz8/",
    tags: ["Angular", "Node.js", "Tailwind", "Web"],
    githubUrl: "https://github.com/AHmedEMadEG/SuppleMart",
    liveUrl: "#",
    category: "fullstack",
  },
  {
    id: 9,
    title: "𝐄𝐱𝐚𝐦𝐢𝐧𝐚𝐭𝐢𝐨𝐧 𝐒𝐲𝐬𝐭𝐞𝐦 𝐃𝐞𝐬𝐢𝐠𝐧",
    description:
      "- an Examination System, crafted using 𝐇𝐓𝐌𝐋, 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭, and 𝐒𝐀𝐒𝐒 (𝐂𝐒𝐒)!",
    cover: "/𝐄𝐱𝐚𝐦𝐢𝐧𝐚𝐭𝐢𝐨𝐧 𝐒𝐲𝐬𝐭𝐞𝐦 𝐃𝐞𝐬𝐢𝐠𝐧.png",
    images: ["/𝐄𝐱𝐚𝐦𝐢𝐧𝐚𝐭𝐢𝐨𝐧 𝐒𝐲𝐬𝐭𝐞𝐦 𝐃𝐞𝐬𝐢𝐠𝐧.png", "/placeholder.svg"],
    video: "https://www.youtube.com/watch?v=QAe3AfbQG9Q",
    tags: ["Html", "javascript", "sass"],
    githubUrl: "https://github.com/Muhamedeyada/ExaminationSysProject",
    liveUrl: "https://examination-sys-project-lxa8.vercel.app/",
    category: "frontend",
  },
  {
    id: 10,
    title: "Homepage for a Responsive Tour & Travel Agency Website",
    description:
      "a fully responsive tour and travel agency website using HTML, CSS, and Bootstrap. This project was a fantastic learning experience!",
    cover: "yallansafer.png",
    images: ["yallansafer.png", "/placeholder.svg"],
    video:
      "https://www.linkedin.com/posts/mohamed-eyada_webdevelopment-html-css-activity-7225213495246516225-jBCA/",
    tags: ["html", "javascript", "bootstrap"],
    githubUrl: "https://github.com/Muhamedeyada/bootStrap",
    liveUrl: "https://boot-strap-yalla-nsfer.vercel.app/",
    category: "frontend",
  },
  {
    id: 11,
    title: "Recipe Finder app",
    description:
      "Instantly find recipes based on your search query. View detailed recipe information including ingredients, instructions, and more.",
    cover: "/recipe.png",
    images: ["/recipe.png", "/placeholder.svg"],
    video: "https://www.youtube.com/watch?v=lyyW1yOh-Vs",
    tags: ["React", "tailwind", "html", "javascript"],
    githubUrl: "https://github.com/Muhamedeyada/RecipeMeun",
    liveUrl: "https://recipe-meun.vercel.app/",
    category: "frontend",
  },
  {
    id: 12,
    title: "Dynamic JSON-Driven Form Builder",
    description:
      "Build an Angular component that dynamically generates and validates forms from JSON configuration, supporting multiple field types and real-time preview.",
    cover: "/form.png",
    images: ["/form.png", "/placeholder.svg"],
    video: "https://www.youtube.com/watch?v=is8uO-l9Kgc",
    tags: ["angular.js", "tailwind"],
    githubUrl: "https://github.com/Muhamedeyada/dynamic-form-builder",
    liveUrl: "https://dynamic-form-builder-nine.vercel.app/",
    category: "frontend",
  },
];
