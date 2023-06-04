import React from "react";
import { ContactButton } from "./ContactButton";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export const Footer = () => {
  return (
    <footer className="mt-28">
      <div className=" my-5 bg-background p-2 flex justify-between">
        <div>
          <h4 className="text-xl sm:text-2xl font-light tracking-wide font-medium mx-10 mt-10 mb-3">
            Work Inquiry
          </h4>
          <p className="font-thin mx-10 mb-10">Let's collaborate</p>
        </div>
        <ContactButton />
      </div>

      <div>
        <a
          className="sm:text-2xl font-light tracking-wide block my-12 m-auto text-primary text-center hover:underline"
          title="email Dorian Kelly"
          href="mailto:dorianrkelly@gmail.com"
          rel="noopener noreferrer"
        >
          dorianrkelly@gmail.com
        </a>
      </div>
      <div className="text-center mt-2 mb-16 flex justify-center">
        <a
          className="mx-2 w-12 p-2 bg-background rounded-3xl"
          title="Dorian's Github profile "
          href="https://github.com/dorian-rose"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github logo" />
        </a>
        <a
          className="mx-2 pt-3 px-3 w-12 p-2 bg-background rounded-3xl"
          title="Dorian's LinkedIn profile"
          href="https://www.linkedin.com/in/dorian-kelly-0785b0204/"
          target="_blank"
        >
          <img src={linkedin} alt="linked in logo" />
        </a>
      </div>
    </footer>
  );
};
