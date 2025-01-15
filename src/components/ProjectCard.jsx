import { useState, useEffect, useRef } from "react";
import { ShowProjectButton } from "./ShowProjectButton";

export const ProjectCard = ({ project, gridReverse }) => {
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
          className={`${display} flex flex-col ${
            gridReverse ? "md:flex-row-reverse" : "md:flex-row"
          } gap-5 md:gap-16 lg:gap-26`}
        >
          <div className="w-full flex items-center">
            <p className=" font-thin text-sm align-middle">{description}</p>
          </div>
          <div className="w-full mx-auto rounded-lg">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              // className={`${display} flex  `}
              className="flex md:flex-row-reverse md:relative md:top-1/2 md:-translate-y-1/2"
            >
              <div className="p-2 rounded-full h-40 w-full hover:shadow  bg-background ">
                <img
                  className="object-cover  w-full h-full  m-auto  rounded-full"
                  src={image}
                  alt={title}
                />
              </div>
              {/* <div className="md:me-5 lg:me-8 ms-8 md:ms-5">
                <p className="text-center relative top-1/2 -translate-y-1/2 text-primary font-thin hover:font-normal bg-background rounded-full px-3 py-1 shadow-lg">
                  View Project
                </p>
              </div> */}
            </a>
          </div>
        </div>
      </article>
    </>
  );
};
