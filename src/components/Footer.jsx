import React from "react";
import { ContactButton } from "./ContactButton";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export const Footer = () => {
  return (
    <footer className="mt-28">
      <div className=" my-5 bg-background p-2 grid grid-cols-2">
        <div>
          <h4 className="text-xl sm:text-2xl text-center font-light tracking-wide font-medium mt-10 ">
            Work Inquiry
          </h4>
          <p className="font-thin mb-10 text-center">Let's collaborate</p>
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
