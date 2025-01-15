import { ProjectButton } from "./ProjectButton";

export const HomeProjectCard = ({ project, gridReverse }) => {
  const { title, description, image, link, stack } = project;
  return (
    <article
      className={`flex flex-col gap-5 justify-center items-stretch ${
        gridReverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="w-full">
        <h2 className="text-2xl font-light tracking-wide">{title}</h2>
        <p className="font-thin text-sm mt-4 mb-8 me-2 ">{description}</p>
        <ProjectButton url={link} />
      </div>
      <div className="hidden md:block bg-background rounded-lg w-full">
        <a
          href="https://gumtree-swap.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-full h-full object-cover object-center p-2"
            src={image}
            alt={`image of the ${title} web app`}
          />
        </a>
      </div>
    </article>
  );
};
