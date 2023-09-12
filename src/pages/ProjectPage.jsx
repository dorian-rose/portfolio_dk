import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../components/projectInfo";

export const ProjectPage = () => {
  return (
    <section>
      <h1 className="font-light tracking-widest mt-4 mx-8 text-2xl sm:text-4xl text-center text-primary">
        Projects
      </h1>

      <div className="sm:mx-10">
        {projects.map((project) => (
          <>
            <ProjectCard key={project.title} project={project} />
          </>
        ))}
      </div>
    </section>
  );
};
