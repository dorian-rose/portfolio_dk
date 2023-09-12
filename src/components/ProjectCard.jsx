

export const ProjectCard = ({ project }) => {
  const { title, description, image, link } = project;

  return (
    <>
      <article className="grid md:grid-cols-2 mx-6 my-10 md:pb-5 lg-pb-0 border-b border-1 lg:border-none">
        <div className="lg:mx-10 md:me-10">
          <h2 className="text-2xl font-light tracking-wide">{title}</h2>
          <p className="font-thin text-sm mt-4 mb-8 me-10">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline relative bottom-3 lg:-top-1/2 lg:translate-y-1/2 lg:left-full bg-background rounded-full p-3 shadow-lg text-slate-500"
          >
            View
          </a>
        </div>

        <div className="bg-background lg:mx-10 rounded-lg my-5 mb-20 lg:mb-0">
          <img
            className="relative top-1/2 -translate-y-1/2 m-auto text-center rounded-lg "
            src={image}
            alt={title}
          />{" "}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative ms-2 -bottom-12 md:hidden bg-background rounded-full p-3 shadow-lg text-slate-500"
          >
            View
          </a>
        </div>
      </article>
    </>
  );
};
