import { useState } from "react";
import { Progress } from "../components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import SkillIcons from "./icons/SkillIcons";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const skillLogos = SkillIcons();

  const skills = {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "Angular.js", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML/CSS", level: 92 },
      { name: "Next.js", level: 75 },
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 65 },
      { name: "RESTful APIs", level: 85 },
    ],
    other: [
      { name: "Git/GitHub", level: 90 },
      { name: "UI/UX Design", level: 75 },
      { name: "Testing", level: 70 },
      { name: "Firebase", level: 70 },
    ],
  };

  const logosByCategory = {
    frontend: [
      { name: "React", icon: skillLogos.react },
      { name: "TypeScript", icon: skillLogos.typescript },
      { name: "JavaScript", icon: skillLogos.javascript },
      { name: "HTML5", icon: skillLogos.html5 },
      { name: "CSS3", icon: skillLogos.css3 },
      { name: "Angular", icon: skillLogos.angular },
      { name: "Next.js", icon: skillLogos.nextjs },
      { name: "Tailwind CSS", icon: skillLogos.tailwindcss },
      { name: "Bootstrap", icon: skillLogos.bootstrap },
    ],
    backend: [
      { name: "Node.js", icon: skillLogos.nodejs },
      { name: "Express.js", icon: skillLogos.express },
      { name: "MongoDB", icon: skillLogos.mongodb },
      { name: "PostgreSQL", icon: skillLogos.postgresql },
      { name: "REST API", icon: skillLogos.api },
    ],
    other: [
      { name: "Firebase", icon: skillLogos.firebase },
      { name: "Git", icon: skillLogos.git },
      { name: "GitHub", icon: skillLogos.github },
      { name: "Testing", icon: skillLogos.testing },
      { name: "Figma", icon: skillLogos.figma },
    ],
  };

  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            My Skills
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-6">
            Worked with a wide range of technologies across frontend and
            backend. Here are my core proficiencies:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs
            defaultValue="frontend"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="frontend" className="px-8">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="px-8">
                Backend
              </TabsTrigger>
              <TabsTrigger value="other" className="px-8">
                Other
              </TabsTrigger>
            </TabsList>

            {Object.entries(skills).map(([category, categorySkills]) => (
              <TabsContent
                key={category}
                value={category}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 transition-all duration-1000"
                      />
                    </div>
                  ))}
                </div>

                {logosByCategory[category as keyof typeof logosByCategory]
                  .length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
                    {logosByCategory[
                      category as keyof typeof logosByCategory
                    ].map((logo, idx) => (
                      <div
                        key={idx}
                        className="aspect-square bg-card rounded-lg flex flex-col items-center justify-center p-4 border border-white/5 hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="w-12 h-12 flex items-center justify-center mb-2">
                          {logo.icon}
                        </div>
                        <span className="text-xs text-center text-muted-foreground mt-1">
                          {logo.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
