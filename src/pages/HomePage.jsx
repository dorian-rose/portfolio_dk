import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { ContactButton } from "../components/ContactButton";
import Iframe from "react-iframe";

export const HomePage = () => {
  return (
    <>
      <section>
        <article className="h-screen bg-background ">
          <div className="relative top-1/3 -translate-y-1/2">
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
        <div className="grid sm:grid-cols-2 mt-4 mx-4">
          <div>
            <a
              href="https://flourishing-sable-f526bd.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Iframe
                className="rounded-md border border-red-800"
                url="https://flourishing-sable-f526bd.netlify.app"
                width="100%"
                height="100%"
              />
            </a>
          </div>

          <div className="m-3">
            <h2 className="text-2xl font-light tracking-wide">World Clock</h2>
            <p className="font-thin text-sm my-2">
              A world clock application built with HTML, CSS, JavaScript,
              Bootstrap and Moment/ Moment Timezone. View the current time in
              the cities displayed on the homepage, or select from a range of
              cities or your current location in the dropdown menu.
            </p>
            <a
              title="view world clock"
              href="https://world-clock-dorian-kelly.netlify.app/"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                <h2>Weather App</h2>
                <p>
                  A weather forecast application build with HTML, CSS, Vanilla
                  JavaScript and using APIs. Select your current city, one of
                  the cities displayed on the homepage or enter any city in the
                  search bar. The app will display current temperature and seven
                  day forecast for the chosen.
                </p>
                <a
                  title="view weather app"
                  href="https://weather-app-dorian-kelly.netlify.app/"
                  target="_blank"
                >
                  View Project
                </a>
              </div>
            </div>
            <div>
              <img src="" title="weather app project" alt="world clock" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
