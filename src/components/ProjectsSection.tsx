import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import ProjectCard from "./ProjectCard";
import { Project } from "../data/projects";
import { projectService } from "../services/api";
import { Skeleton } from "../components/ui/skeleton";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

const ProjectSkeleton = () => (
  <div className="flex flex-col h-full">
    <Skeleton className="aspect-video w-full" />
    <div className="p-4 space-y-3">
      <Skeleton className="h-6 w-3/4" />
      <div className="flex gap-2">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-16" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <div className="flex justify-between pt-4">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await projectService.getAll();
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          setProjects([]);
          setError(true);
          toast.error("Failed to load projects data");
        }
      } catch (error) {
        setProjects([]);
        setError(true);
        toast.error("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = filteredProjects.length > visibleProjects;

  const showMoreProjects = () => {
    setVisibleProjects((prevCount) => prevCount + 3);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            My Projects
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-6">
            A selection of my recent frontend development projects. Each project
            showcases different skills and technologies.
          </p>

          <div className="flex gap-2 mt-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="px-6"
            >
              All
            </Button>
            <Button
              variant={filter === "frontend" ? "default" : "outline"}
              onClick={() => setFilter("frontend")}
              className="px-6"
            >
              Frontend
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                className="bg-card border border-white/5 rounded-md overflow-hidden"
                key={i}
              >
                <ProjectSkeleton />
              </div>
            ))
          ) : error ? (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">
                Unable to load projects. Please try again later.
              </p>
            </div>
          ) : displayedProjects.length > 0 ? (
            displayedProjects.map((project) => (
              <div
                key={project._id || project.id}
                onClick={() => handleProjectClick(project)}
                className="cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">
                No projects found for this category.
              </p>
            </div>
          )}
        </div>

        {!loading && !error && hasMoreProjects && (
          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg" onClick={showMoreProjects}>
              View More Projects
            </Button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl bg-background">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="aspect-video bg-muted rounded-md overflow-hidden">
              <img
                src={selectedProject?.image}
                alt={selectedProject?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedProject?.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground">
              {selectedProject?.description}
            </p>
            <div className="flex gap-4 pt-4">
              {selectedProject?.githubUrl && (
                <Button asChild variant="outline">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </a>
                </Button>
              )}
              {selectedProject?.liveUrl && (
                <Button asChild>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
