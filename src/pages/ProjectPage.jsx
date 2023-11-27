import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../components/projectInfo";

export const ProjectPage = () => {
  return (
    <section className="max-w-projects m-auto">
      <h1 className="font-light tracking-widest mt-4 mx-8 text-2xl sm:text-4xl text-center text-primary">
        Projects
      </h1>

      <div className="mx-10 mt-10 sm:mt-20 ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
