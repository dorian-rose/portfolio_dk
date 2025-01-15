import { useRef } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { HomeProjectCard } from "../components/HomeProjectCard";
import { projects } from "../components/projectInfo";
import { ContactButton } from "../components/ContactButton";
import productSwap from "../assets/productSwap.png";
import blog from "../assets/blog.png";
import h2oh from "../assets/h2oh.png";

import { ProjectButton } from "../components/ProjectButton";

import { Stacks } from "../components/Stacks";

export const HomePage = () => {
  const info = useRef(null);
  const scrollToInfo = () => {
    info.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <section>
        <article className="heroHeight bg-background">
          <div className="relative top-1/2 -translate-y-1/2 pb-20 ">
            {/* <div className="absolute heroPosition left-1/2 -translate-x-1/2"> */}
            <p className="text-center font-thin ">Hi, I'm</p>
            <h1 className="sm:m-10 m-6  font-light tracking-widest text-3xl sm:text-4xl md:text-6xl text-center">
              Dorian Kelly
            </h1>
            <h2 className="font-light tracking-widest mt-4 mx-8 text-xl sm:text-2xl md:text-4xl text-center">
              Full-stack developer based in Spain
            </h2>
            <Stacks />
            <ContactButton />
            <button
              onClick={scrollToInfo}
              className="block m-auto mt-5 xl:mt-10 2xl:mt-20 font-thin tracking-wide w-fit py-1 px-2  text-primary rounded-md px-2 hover:shadow-lg"
            >
              <p>See more</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 m-auto"
              >
                <path
                  fillRule="evenodd"
                  d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </article>

        <h3
          className="font-thin tracking-widest pt-8 sm:py-8 text-primary text-xl sm:text-2xl md:text-3xl text-center"
          ref={info}
        >
          Featured Projects
        </h3>
        <div className="mx-6 md:mx-10 md:my-16 my-10 flex flex-col gap-10 md:gap-16">
          {projects.slice(0, 3).map((project, index) => (
            <HomeProjectCard
              key={project.id}
              project={project}
              gridReverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>
    </>
  );
};
