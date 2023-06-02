import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { ContactButton } from "../components/ContactButton";
import Iframe from "react-iframe";
import { ProjectButton } from "../components/ProjectButton";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <>
      <section>
        <article className="heroHeight mb-5 bg-background ">
          <div className="relative top-1/2 -translate-y-2/3">
            <p className="text-center font-thin">Hi, I'm</p>
            <h1 className="m-10 font-light tracking-widest text-5xl sm:text-7xl text-center">
              Dorian Kelly
            </h1>
            <h2 className="font-light tracking-widest mt-4 mx-8 text-2xl sm:text-4xl text-center">
              Front-end developer based in Spain
            </h2>
            <ContactButton />
          </div>
        </article>

        <p className="text-center font-thin mt-8">Featured Projects</p>
        <article className="grid sm:grid-cols-2 m-6">
          <div className="hidden sm:block">
            <a
              href="https://flourishing-sable-f526bd.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Iframe
                className="rounded-md border border-red-800"
                // url="https://flourishing-sable-f526bd.netlify.app"
                width="100%"
                height="100%"
              />
            </a>
          </div>

          <div className="my-3 ms-5">
            <h2 className="text-2xl font-light tracking-wide">World Clock</h2>
            <p className="font-thin text-sm mt-4 mb-8">
              A world clock application built with HTML, CSS, JavaScript,
              Bootstrap and Moment/ Moment Timezone. View the current time in
              the cities displayed on the homepage, or select from a range of
              cities or your current location in the dropdown menu.
            </p>
            <ProjectButton url="https://flourishing-sable-f526bd.netlify.app" />
          </div>
        </article>
        <article className="grid sm:grid-cols-2 m-6">
          <div className="my-3 ms-5">
            <h2 className="text-2xl font-light tracking-wide">World Clock</h2>
            <p className="font-thin text-sm mt-4 mb-8">
              A world clock application built with HTML, CSS, JavaScript,
              Bootstrap and Moment/ Moment Timezone. View the current time in
              the cities displayed on the homepage, or select from a range of
              cities or your current location in the dropdown menu.
            </p>
            <ProjectButton url="https://flourishing-sable-f526bd.netlify.app" />
          </div>
          <div className="hidden sm:block">
            <a
              href="https://flourishing-sable-f526bd.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Iframe
                className="rounded-md border border-red-800"
                // url="https://flourishing-sable-f526bd.netlify.app"
                width="100%"
                height="100%"
              />
            </a>
          </div>
        </article>
        <article className="grid sm:grid-cols-2 m-6">
          <div className="hidden sm:block">
            <a
              href="https://flourishing-sable-f526bd.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Iframe
                className="rounded-md border border-red-800"
                // url="https://flourishing-sable-f526bd.netlify.app"
                width="100%"
                height="100%"
              />
            </a>
          </div>

          <div className="my-3 ms-5">
            <h2 className="text-2xl font-light tracking-wide">World Clock</h2>
            <p className="font-thin text-sm mt-4 mb-8">
              A world clock application built with HTML, CSS, JavaScript,
              Bootstrap and Moment/ Moment Timezone. View the current time in
              the cities displayed on the homepage, or select from a range of
              cities or your current location in the dropdown menu.
            </p>
            <ProjectButton url="https://flourishing-sable-f526bd.netlify.app" />
          </div>
        </article>
        <Footer />
      </section>
    </>
  );
};
