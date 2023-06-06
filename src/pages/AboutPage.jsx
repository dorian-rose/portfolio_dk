import React from "react";

export const AboutPage = () => {
  return (
    <div>
      <h1 className="font-light tracking-widest mt-4 mx-8 text-2xl sm:text-4xl text-center text-primary">
        About me
      </h1>
      <p className="text-center font-thin mt-6">
        Coming soon, please check back later, or visit my
        <a
          className="mx-1 text-primary hover:underline"
          href="https://www.linkedin.com/in/dorian-kelly/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        for more information.
      </p>
    </div>
  );
};
