import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { ContactButton } from "../components/ContactButton";
import productSwap from "../assets/productSwap.png";
import h2oh from "../assets/h2oh.png";
import worldClock from "../assets/worldClock.png";
import { ProjectButton } from "../components/ProjectButton";
import { Footer } from "../components/Footer";
import { Stacks } from "../components/Stacks";

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
              Full-stack developer based in Spain
            </h2>
            <Stacks />
            <ContactButton />
          </div>
        </article>

        <p className="text-center font-thin mt-8">Featured Projects</p>
        <article className="grid sm:grid-cols-2 m-6">
          <div className="hidden sm:block bg-background mx-10 rounded-lg">
            <a
              href="https://flourishing-sable-f526bd.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="block m-auto text-center rounded-lg my-5"
                src={h2oh}
                alt="image of the h20h web application showing a question and multiple choice answers on blue text areas"
              />
            </a>
          </div>

          <div className="my-3 ms-5 relative md:top-1/2  md:-translate-y-1/4">
            <h2 className="text-2xl font-light tracking-wide">
              H2Oh Políticas azules
            </h2>
            <p className="font-thin text-sm mt-4 mb-8 me-10">
              This project consisted of building the arquitecture for a product
              designed by a user experience team, including exact replication of
              supplied figma views and implementation of requested
              functionalities. The project also included collaboration with a
              team of data scientists and compliance with the recommendations of
              the cybersecurity team. Front end build with react.js, back end
              build with node express.js.
            </p>
            <ProjectButton url="https://flourishing-sable-f526bd.netlify.app" />
          </div>
        </article>
        <article className="grid sm:grid-cols-2 my-10 mx-6">
          <div className="my-3 ms-5 sm:ms-10 relative md:top-1/2  md:-translate-y-1/4">
            <h2 className="text-2xl font-light tracking-wide">
              Product swap site
            </h2>
            <p className="font-thin text-sm mt-4 mb-8 me-2 ">
              A site for listing unwanted items, or gaining an item on offer
              from another user. The frontend is built with react.js utilizing
              hooks and redux, the backend is built with node express.js, and
              the database used is Postgres Elephant (SQL). User authentication
              managed with Auth0.
            </p>
            <ProjectButton url="https://heroic-torrone-368c8a.netlify.app" />
          </div>
          <div className="hidden sm:block bg-background mx-10 rounded-lg">
            <a
              href="https://heroic-torrone-368c8a.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="block m-auto text-center rounded-lg my-5"
                src={productSwap}
                alt="image of the h20h web application showing a question and multiple choice answers on blue text areas"
              />
            </a>
          </div>
        </article>
        <article className="grid sm:grid-cols-2 m-6">
          <div className="hidden sm:block bg-background mx-10 rounded-lg">
            <a
              href="https://world-clock-dorian-kelly.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="block m-auto text-center rounded-lg my-5"
                src={worldClock}
                alt="image of the h20h web application showing a question and multiple choice answers on blue text areas"
              />
            </a>
          </div>

          <div className="my-3 ms-5 relative md:top-1/2  md:-translate-y-1/4">
            <h2 className="text-2xl font-light tracking-wide">World Clock</h2>
            <p className="font-thin text-sm mt-4 mb-8 me-10">
              A world clock application built with HTML, CSS, Vanilla
              JavaScript, Bootstrap and the Moment/ Moment Timezone APIs. View
              the current time in the cities displayed on the homepage, or
              select from a range of cities or your current location in the
              dropdown menu.
            </p>
            <ProjectButton url="https://world-clock-dorian-kelly.netlify.app/" />
          </div>
        </article>
      </section>
    </>
  );
};
