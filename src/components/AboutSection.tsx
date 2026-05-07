import { Card, CardContent } from "../components/ui/card";
import { Code, LayoutGrid, Smartphone } from "lucide-react";

const AboutSection = () => {
  const experienceData = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description:
        "Build responsive and performant web applications using modern frameworks like React.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Code Quality & Peer Review",
      description:
        "Review teammates' code, provide feedback, and ensure clean, maintainable code through peer reviews.",
    },
    {
      icon: <LayoutGrid className="h-8 w-8 text-primary" />,
      title: "Performance & Optimization",
      description:
        "Optimize web apps for speed and scalability while maintaining high code quality and efficiency.",
    },
  ];

  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            About Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-6">
            I'm a passionate{" "}
            <span className="text-primary font-medium">Full Stack Developer</span>{" "}
            with over 2 years of experience building scalable web applications and
            delivering high-quality products across the entire stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I graduated from Port Said University with a degree in Electrical
                Engineering, but my passion for technology led me to transition
                into software engineering. I joined the Information Technology
                Institute (ITI) scholarship, where I specialized in the MEARN stack.
              </p>
              <p>
                Currently, I am a Software Engineer at{" "}
                <span className="text-primary">Dexi</span>, where I build robust
                backend services with Django and dynamic frontends with React.js.
                Prior to this, I worked at <span className="text-primary">Xmotion</span>{" "}
                as a Full-Stack Developer using Angular and Node.js.
              </p>
              <p>
                My experience spans across various frameworks including Next.js,
                NestJS, and Django. I focus on creating seamless user experiences
                integrated with scalable backend architectures, always striving to
                write clean, maintainable code.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 grid gap-6">
            {experienceData.map((item, index) => (
              <Card
                key={index}
                className="bg-card border-white/5 shadow-lg overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
