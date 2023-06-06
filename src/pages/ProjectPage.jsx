import React from "react";

export const ProjectPage = () => {
  return (
    <div>
      <h1 className="font-light tracking-widest mt-4 mx-8 text-2xl sm:text-4xl text-center text-primary">
        Projects
      </h1>
      <p className="text-center font-thin mt-6">
        Full portfolio of projects being updated. Please check back again soon,
        and in the meantime feel free to explore my
        <a
          className="ms-1 text-primary hover:underline"
          href="https://github.com/dorian-rose"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub!
        </a>
      </p>
    </div>
  );
};
