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
      "A comprehensive car rental platform featuring RxJS for state management, i18next for internationalization, and Role-Based Access Control (RBAC). Provides a seamless booking experience for users.",
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
    title: "ClinixPro",
    description:
      "A healthcare management system designed for patient records, appointment scheduling, and secure data handling using Appwrite. Simplifies clinical workflows and patient management.",
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
    title: "Multi-Tenant ERP System",
    description:
      "A scalable ERP solution for accounting with multi-tenancy support. Features robust backend architecture with NestJS and PostgreSQL, and a dynamic React frontend.",
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
    title: "Real-Time Chat Application",
    description:
      "A high-performance messaging platform utilizing WebSockets for real-time communication. Built with Node.js and PostgreSQL to ensure scalability and reliability.",
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
      "A MERN stack marketplace for listing, buying, and trading toys. Features a secure environment and user-friendly interface for collectors and families.",
    cover: "/toyzcity.png",
    images: ["/toyzcity.png"],
    video:
      "https://www.linkedin.com/posts/mohamed-eyada_toyzcity-graduationproject-mernstack-activity-7275075286948356096-WsAY/",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/Muhamedeyada/toy-treasures-frontend",
    liveUrl: "https://toy-treasures-frontend-rbrk.vercel.app/",
    category: "fullstack",
  },
  {
    id: 6,
    title: "GitHub Clone",
    description:
      "A functional GitHub clone featuring repository exploration, user profiles, and activity tracking. Implements Passport.js for secure social authentication.",
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
    title: "MERN Blog Platform",
    description:
      "A comprehensive blog platform with full CRUD functionality. Allows users to create, manage, and share content seamlessly within a modern web interface.",
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
      "An Angular-based e-commerce platform for supplements. Features intuitive product browsing, a functional shopping cart, and a responsive design.",
    cover: "/supplmart.png",
    images: ["/supplmart.png"],
    video:
      "https://www.linkedin.com/posts/mohamed-eyada_ecommerce-webdevelopment-angular18-activity-7251952102111903744-rOz8/",
    tags: ["Angular", "Node.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/AHmedEMadEG/SuppleMart",
    liveUrl: "#",
    category: "fullstack",
  },
  {
    id: 9,
    title: "Examination System Design",
    description:
      "A robust examination management system crafted with HTML, JavaScript, and SASS. Features timed quizzes and automated scoring logic.",
    cover: "/Examination System Design.png",
    images: ["/Examination System Design.png"],
    video: "https://www.youtube.com/watch?v=QAe3AfbQG9Q",
    tags: ["HTML5", "JavaScript", "SASS"],
    githubUrl: "https://github.com/Muhamedeyada/ExaminationSysProject",
    liveUrl: "https://examination-sys-project-lxa8.vercel.app/",
    category: "frontend",
  },
  {
    id: 10,
    title: "Responsive Travel Agency",
    description:
      "A fully responsive homepage for a tour and travel agency. Built using Bootstrap to ensure mobile-first performance and elegant layouts.",
    cover: "/yallansafer.png",
    images: ["/yallansafer.png"],
    video:
      "https://www.linkedin.com/posts/mohamed-eyada_webdevelopment-html-css-activity-7225213495246516225-jBCA/",
    tags: ["HTML5", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/Muhamedeyada/bootStrap",
    liveUrl: "https://boot-strap-yalla-nsfer.vercel.app/",
    category: "frontend",
  },
  {
    id: 11,
    title: "Recipe Finder",
    description:
      "A React application that enables users to find recipes instantly. Provides detailed ingredients, instructions, and high-quality visual content.",
    cover: "/recipe.png",
    images: ["/recipe.png"],
    video: "https://www.youtube.com/watch?v=lyyW1yOh-Vs",
    tags: ["React.js", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/Muhamedeyada/RecipeMeun",
    liveUrl: "https://recipe-meun.vercel.app/",
    category: "frontend",
  },
  {
    id: 12,
    title: "JSON-Driven Form Builder",
    description:
      "A dynamic Angular component that generates and validates forms from JSON configurations. Supports multiple field types and real-time validation feedback.",
    cover: "/form.png",
    images: ["/form.png"],
    video: "https://www.youtube.com/watch?v=is8uO-l9Kgc",
    tags: ["Angular", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/Muhamedeyada/dynamic-form-builder",
    liveUrl: "https://dynamic-form-builder-nine.vercel.app/",
    category: "frontend",
  },
];
