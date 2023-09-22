import { useState, useEffect, useRef } from "react";
import { ShowProjectButton } from "./ShowProjectButton";

export const ProjectCard = ({ project }) => {
  const { title, description, image, link, stack } = project;
  const [display, setDisplay] = useState("hidden");

  return (
    <>
      <article>
        <ShowProjectButton
          display={display}
          setDisplay={setDisplay}
          title={title}
          stack={stack}
        />
        <div
          className={`${display} flex flex-col md:flex-row mx-2 lg:max-h-[12rem]`}
        >
          <div className="md:me-10 md:max-w-[50%] max-h-fit">
            <p className="mt-4  font-thin text-sm lg:me-10">{description}</p>
          </div>

          <div className="md:max-w-[50%] rounded-lg lg:mx-10 mt-10 md:mt-0">
            <div className="p-2 rounded-lg h-full   bg-background ">
              <img
                className="object-cover  h-full  m-auto  rounded-lg"
                src={image}
                alt={title}
              />
            </div>
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${display} flex w-fit text-primary font-thin hover:font-normal ms-2 mt-3 mb-6 sm:mb-10 lg:mb-3  bg-background rounded-full px-3 py-1 shadow-lg`}
        >
          <p> View Project</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#63171C"
            className="w-4 ms-1"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </article>
    </>
  );
};
