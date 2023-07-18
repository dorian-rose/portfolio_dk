import { useRef } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { ContactButton } from "../components/ContactButton";
import productSwap from "../assets/productSwap.png";
import blog from "../assets/blog.png";
import h2oh from "../assets/h2oh.png";

import { ProjectButton } from "../components/ProjectButton";
import { Footer } from "../components/Footer";
import { Stacks } from "../components/Stacks";

export const HomePage = () => {
  const info = useRef(null);
  const scrollToInfo = () => {
    info.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <section>
        <article className="heroHeight mb-5 bg-background ">
          <div className="relative top-1/2 -translate-y-2/3 pt-16">
            <p className="text-center font-thin">Hi, I'm</p>
            <h1 className="sm:m-10 m-6 font-light tracking-widest text-3xl sm:text-5xl md:text-7xl text-center">
              Dorian Kelly
            </h1>
            <h2 className="font-light tracking-widest mt-4 mx-8 text-xl sm:text-2xl sm:text-4xl text-center">
              Full-stack developer based in Spain
            </h2>
            <Stacks />
            <ContactButton />
            <button
              onClick={scrollToInfo}
              className="block m-auto mt-5 font-thin tracking-wide w-fit py-1 px-2  text-primary rounded-md px-2 hover:shadow-lg"
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

        <p ref={info} className="text-center font-thin pt-8">
          Featured Projects
        </p>
        <article className="grid sm:grid-cols-2 m-6">
          <div className="hidden sm:block bg-background mx-10 rounded-lg">
            <a
              href="https://h20h.netlify.app/"
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
              the cybersecurity team. Front end is built with react.js, also
              utilising leaflet, chart.js and more, and the back end is built
              with node express.js.
            </p>
            <ProjectButton url="https://h20h.netlify.app/" />
          </div>
        </article>
        <article className="grid sm:grid-cols-2 my-10 mx-6">
          <div className="my-3 ms-5 sm:ms-10 relative md:top-1/2  md:-translate-y-1/3">
            <h2 className="text-2xl font-light tracking-wide">
              Product swap site
            </h2>
            <p className="font-thin text-sm mt-4 mb-8 me-2 ">
              A site for listing unwanted items, or gaining an item on offer
              from another user. The frontend is built with react.js utilizing
              hooks and redux, the backend is built with node express.js. The
              database used is Postgres Elephant (SQL), allowing for the user,
              role and product tables to be related. User authentication managed
              with Auth0. <br className="mt-2" />
              The application has three levels of user roles: unregistered user
              (view only), registered user (add and manage items, contact other
              users) and site administrator (monitor and delete all product
              entries and users). The different access/views allowed for each
              level are protected.
            </p>
            <ProjectButton url="https://gumtree-swap.netlify.app/" />
          </div>
          <div className="hidden sm:block bg-background mx-10 rounded-lg">
            <a
              href="https://gumtree-swap.netlify.app/"
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
              href="https://blog-project-frontend.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="block m-auto text-center rounded-lg my-5"
                src={blog}
                alt="image of a blog web application showing the headign 'News!', text, and a features latest story about travel in Vietnam accompanied by a photo of terraced rice fields "
              />
            </a>
          </div>

          <div className="my-3 ms-5 relative md:top-1/2  md:-translate-y-1/4">
            <h2 className="text-2xl font-light tracking-wide">
              Multi-author blog site
            </h2>
            <p className="font-thin text-sm mt-4 mb-8 me-10">
              A blog website where authors can log in and post articles. Authors
              can edit or delete their entries, and unregistered site visitors
              can search and read articles. This site was an exercise in Node.js
              Express; both the back and front end are made using this framework
              , the front using ejs template engine to create views.
            </p>
            <ProjectButton url="https://world-clock-dorian-kelly.netlify.app/" />
          </div>
        </article>
        {/* <article className="grid sm:grid-cols-2 m-6">
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
        </article> */}
      </section>
    </>
  );
};
