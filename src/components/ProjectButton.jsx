import { Link } from "react-router-dom";

export const ProjectButton = ({ url }) => {
  return (
    <a
      className="font-thin tracking-wide w-fit py-2 px-4  text-primary border border-primary  hover:bg-primary hover:text-background rounded-md px-2 shadow-lg"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
    </a>
  );
};
