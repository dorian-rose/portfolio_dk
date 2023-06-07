import { useState } from "react";
import { Stacks } from "./Stacks";

export const Education = () => {
  const [showEducation, setShowEducation] = useState(false);

  const displayEducation = () => {
    if (showEducation == false) {
      setShowEducation(true);
    } else {
      setShowEducation(false);
    }
  };

  return (
    <article className="">
      <button
        onClick={displayEducation}
        className="block m-auto md:mt-14 ps-4 pe-10 py-2 w-96 font-thin bg-background flex justify-between hover:border hover:border-primary"
      >
        <p>Education</p>
        {showEducation ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clip-rule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      <div className={`mx-12 my-2 ${showEducation ? "block" : "hidden"}`}>
        <h2 className="font-thin tracking-widest text-lg text-primary">
          The Bridge Digial Talent Accelerator{" "}
        </h2>
        <p className="font-thin">Fullstack Web Development</p>
        <p className="font-thin">2023</p>
        <p className="font-thin text-xs italic text-primary">
          MongoDB, Postgres SQL, Node.js, Express, React, Jest, API Rest,{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/dorian-kelly/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
          >
            more
          </a>
        </p>
        <h2 className="mt-4 font-thin tracking-widest text-lg text-primary">
          Flinders University of South Australia
        </h2>
        <p className="font-thin">Bachelor of Applied Linguistics</p>
        <p className="font-thin">2013-2015</p>
        <h2 className="mt-4 font-thin tracking-widest text-lg text-primary">
          Flinders University of South Australia
        </h2>
        <p className="font-thin">Bachelor of Speech Pathology</p>
        <p className="font-thin">2010-2012</p>
      </div>
    </article>
  );
};
