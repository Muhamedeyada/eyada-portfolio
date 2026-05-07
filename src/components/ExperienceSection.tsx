import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Dexi",
      role: "Software Engineer, Full Stack (React.js, Django)",
      period: "Mar 2025 – Present",
      description: [
        "Engineered Django backend services and APIs for a dental clinic platform, handling appointment logic, billing automation, and secure data management.",
        "Implemented 7+ scalable backend modules including pricing systems, user management, and analytics, reducing data processing time by 30%.",
      ],
    },
    {
      company: "Freelance",
      role: "Full-Stack Developer",
      period: "Nov 2024 – Present",
      description: [
        "Built full-stack applications using appropriate frontend (Angular/React/Next.js) and backend (Nest.js/Django/Express.js) frameworks.",
        "Created integrated systems with end-to-end functionality tailored to project requirements.",
      ],
    },
    {
      company: "Xmotion",
      role: "Software Engineer, Full-Stack Developer (Angular & Node.js)",
      period: "Sep 2024 – Mar 2025",
      description: [
        "Engineered full-stack web applications using Angular and Node.js, integrating UI with server-side logic and data layers.",
        "Created modular frontend components and robust backend APIs to ensure application scalability and maintainability.",
      ],
    },
    {
      company: "Information Technology Institute (ITI)",
      role: "MEARN Stack Developer (Internship)",
      period: "Apr 2024 – Sep 2024",
      description: [
        "Trained in full-stack development with expertise in React.js, Angular, Node.js, and NestJS.",
        "Built responsive web applications using HTML, CSS, JavaScript, TypeScript, and REST APIs.",
      ],
    },
    {
      company: "EEC Company",
      role: "Web Developer (Internship)",
      period: "Nov 2023 – Jan 2024",
      description: [
        "Built and integrated responsive web interfaces using HTML, CSS, and JavaScript into full-stack applications.",
        "Implemented interactive features and ensured seamless backend connectivity.",
      ],
    },
    {
      company: "EEC Company",
      role: "Consulting Engineer for Fire Systems",
      period: "Dec 2022 – Sep 2023",
      description: [
        "Managed fire systems engineering projects at Alexandria Port.",
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            Professional Experience
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-6">
            My career journey and professional growth in software engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-primary/20 pb-8 last:pb-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
              <Card className="bg-card border-white/5 shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                        <Briefcase className="h-5 w-5" />
                        {exp.company}
                      </h3>
                      <p className="text-lg font-semibold">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full text-sm">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
