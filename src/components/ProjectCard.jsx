import { useState } from "react";
import { ShowProjectButton } from "./ShowProjectButton";

export const ProjectCard = ({ project }) => {
  const { title, description, image, link, stack } = project;
  const [display, setDisplay] = useState("hidden");

  return (
    <>
      <article
        className={`grid md:grid-cols-2 mx-6 ${
          display === "" ? "mb-10 lg:mb-16 md:pb-5 lg-pb-0 " : "m-auto mb-5 "
        } border-b border-1 md:border-none`}
      >
        <div className="lg:mx-10 md:me-10">
          <ShowProjectButton
            display={display}
            setDisplay={setDisplay}
            title={title}
          />
          <p
            className={`${display} font-thin text-sm mt-4 lg:me-10 mb-5 md:mb-10 lg:mb-0`}
          >
            {description}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-primary font-thin hover:font-normal hidden ${
              display === "" && "md:inline"
            } relative bottom-3 lg:-top-1/2 lg:translate-y-1/2 lg:left-full bg-background rounded-full p-3 shadow-lg `}
          >
            View
          </a>
        </div>

        <div
          className={`${
            display === "hidden"
              ? "italic mt-3 lg:mt-7 font-thin text-primary w-fit"
              : "bg-background lg:mx-10 rounded-lg mb-20 lg:mb-0"
          } `}
        >
          <p
            className={`${
              display === "hidden" ? "text-xs sm:text-base mb-1" : "hidden"
            } `}
          >
            {stack}
          </p>
          <img
            className={`${display} relative top-1/2 -translate-y-1/2 m-auto text-center rounded-lg `}
            src={image}
            alt={title}
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display} text-primary font-thin hover:font-normal relative ms-2 -bottom-12 md:hidden bg-background rounded-full p-3 shadow-lg `}
          >
            View
          </a>
        </div>
      </article>
    </>
  );
};
