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
    title: "Toyzcity",
    description:
      "Toyzcity allows users to list, buy, and trade toys in a secure, user-friendly environment. It's a full-stack application ",
    cover: "/toyzcity.png", //
    images: ["/toyzcity.png"],
    video:
      "https://www.linkedin.com/posts/mohamed-eyada_toyzcity-graduationproject-mernstack-activity-7275075286948356096-WsAY/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE60KyEBnCB8q8noqsn44RxDQn2GQnaOGvk",
    tags: ["React", "Node.js", "MongoDB", "Web"],
    githubUrl: "https://github.com/Muhamedeyada/toy-treasures-frontend",
    liveUrl: "https://toy-treasures-frontend-rbrk.vercel.app/",
    category: "fullstack",
  },
  {
    id: 2,
    title: " SupplMart E-commerce ",
    description:
      "The marketing website for LeadBull, showcasing the platform's features and benefits with a modern design.",
    cover: "supplmart.png",
    images: ["supplmart.png", "/placeholder.svg"],
    video:
      "https://www.linkedin.com/posts/mohamed-eyada_ecommerce-webdevelopment-angular18-activity-7251952102111903744-rOz8/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE60KyEBnCB8q8noqsn44RxDQn2GQnaOGvk",
    tags: ["React", "angulat.js", "tailwind", "Web"],
    githubUrl: "https://github.com/AHmedEMadEG/SuppleMart",
    liveUrl:
      "https://www.linkedin.com/posts/mohamed-eyada_ecommerce-webdevelopment-angular18-activity-7251952102111903744-rOz8/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE60KyEBnCB8q8noqsn44RxDQn2GQnaOGvk",
    category: "fullstack",
  },
  {
    id: 3,
    title: "𝐄𝐱𝐚𝐦𝐢𝐧𝐚𝐭𝐢𝐨𝐧 𝐒𝐲𝐬𝐭𝐞𝐦 𝐃𝐞𝐬𝐢𝐠𝐧",
    description:
      "- an Examination System, crafted using 𝐇𝐓𝐌𝐋, 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭, and 𝐒𝐀𝐒𝐒 (𝐂𝐒𝐒)!",
    cover: "/𝐄𝐱𝐚𝐦𝐢𝐧𝐚𝐭𝐢𝐨𝐧 𝐒𝐲𝐬𝐭𝐞𝐦 𝐃𝐞𝐬𝐢𝐠𝐧.png",
    images: [
      "/𝐄𝐱𝐚𝐦𝐢𝐧𝐚𝐭𝐢𝐨𝐧 𝐒𝐲𝐬𝐭𝐞𝐦 𝐃𝐞𝐬𝐢𝐠𝐧.png",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    video: "https://www.youtube.com/watch?v=QAe3AfbQG9Q",
    tags: ["Html", "javascript", "sass"],
    githubUrl: "https://github.com/Muhamedeyada/ExaminationSysProject",
    liveUrl: "https://examination-sys-project-lxa8.vercel.app/",
    category: "frontend",
  },
  {
    id: 4,
    title: "Homepage for a Responsive Tour & Travel Agency Website",
    description:
      "a fully responsive tour and travel agency website using HTML, CSS, and Bootstrap. This project was a fantastic learning experience!",
    cover: "yallansafer.png",
    images: ["yallansafer.png", "/placeholder.svg", "/placeholder.svg"],
    video:
      "https://www.linkedin.com/posts/mohamed-eyada_webdevelopment-html-css-activity-7225213495246516225-jBCA/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE60KyEBnCB8q8noqsn44RxDQn2GQnaOGvk",
    tags: ["html", "javascript", "bootstrap"],
    githubUrl: "https://github.com/Muhamedeyada/bootStrap",
    liveUrl: "https://boot-strap-yalla-nsfer.vercel.app/",
    category: "frontend",
  },
  {
    id: 5,
    title: " Recipe Finder app built with ReactJS and styled with TailwindCSS!",
    description: ` Instantly find recipes based on your search query 🥘
Interactive Recipe Cards: View detailed recipe information including ingredients, instructions, and more 🥑🍳`,
    cover: "/recipe.png",
    images: ["/recipe.png", "/placeholder.svg"],
    video: "https://www.youtube.com/watch?v=lyyW1yOh-Vs",
    tags: ["React", "tailwind", "html", "javascript"],
    githubUrl: "https://github.com/Muhamedeyada/RecipeMeun",
    liveUrl: "https://recipe-meun.vercel.app/",
    category: "frontend",
  },
  {
    id: 6,
    title: "Dynamic JSON-Driven Form Builder",
    description:
      "Build an Angular component that dynamically generates and validates forms from JSON configuration, supporting multiple field types, nested groups, and real-time preview with submission handling.",
    cover: "/form.png",
    images: ["/form.png", "/placeholder.svg"],
    video: "https://www.youtube.com/watch?v=is8uO-l9Kgc",
    tags: ["angular.js", "tailwind"],
    githubUrl: "#",
    liveUrl: "https://dynamic-form-builder-nine.vercel.app/",
    category: "frontend",
  },
];
