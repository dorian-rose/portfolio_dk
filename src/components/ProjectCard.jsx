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
          className={`${display} flex flex-col md:flex-row  lg:max-h-[12rem] md:mb-20`}
        >
          <div className="relative lg:me-10 md:max-w-[50%] mb-5 md:mb-0 max-h-fit">
            <p className=" font-thin text-sm lg:me-10">{description}</p>
          </div>

          <div className="md:max-w-[50%] mx-auto rounded-lg  mb-10 md:mb-0  ">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              // className={`${display} flex  `}
              className="flex md:flex-row-reverse md:relative md:top-1/2 md:-translate-y-1/2"
            >
              <div className="p-2 rounded-full h-40 w-40 md:w-48 hover:shadow  bg-background ">
                <img
                  className="object-cover  h-full  m-auto  rounded-full"
                  src={image}
                  alt={title}
                />
              </div>
              <div className="md:me-5 lg:me-8 ms-8 md:ms-5">
                <p className="text-center relative top-1/2 -translate-y-1/2 text-primary font-thin hover:font-normal bg-background rounded-full px-3 py-1 shadow-lg">
                  View Project
                </p>
              </div>
            </a>
          </div>
        </div>
      </article>
    </>
  );
};
