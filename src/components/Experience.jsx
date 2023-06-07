import { useState } from "react";
import { Stacks } from "./Stacks";

export const Experience = () => {
  const [showExperience, setShowExperience] = useState(false);

  const displayExperience = () => {
    if (showExperience == false) {
      setShowExperience(true);
    } else {
      setShowExperience(false);
    }
  };

  return (
    <article className="mt-4">
      <button
        onClick={displayExperience}
        className="block m-auto ps-4 pe-10 py-2 w-96 font-thin bg-background flex justify-between hover:border hover:border-primary"
      >
        <p>Experience</p>
        {showExperience ? (
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
      <div className={`mx-12 my-2 ${showExperience ? "block" : "hidden"}`}>
        <h2 className="mt-4 font-thin tracking-widest text-lg text-primary">
          The Bridge Digial Talent Accelerator{" "}
        </h2>
        <h3 className="font-thin tracking-widest text-lg ">Student</h3>
        <p className="font-thin">2023</p>
        <p className="font-thin">
          With a focus on sector-readiness, the Bridge's Web Development
          bootcamp providesstudents with a thorough and practical understanding
          of the most demanded stacks. During the 480 hours of class and further
          400 hours of coding practice of the bootcamp, Igained practical
          experience developing both the front end and back end of a variety
          ofweb applications. Technologies I mastered include:
        </p>
        <div className="flex my-2">
          <ul className="mx-8 list-disc font-thin">
            <li>MongoD</li>
            <li>Postgres SQL</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>API Rest</li>
            <li>Agile</li>
          </ul>
          <ul className="mx-8 list-disc font-thin">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Jest</li>
            <li>
              <a
                className="underline"
                href="https://www.linkedin.com/in/dorian-kelly/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
              >
                and more
              </a>
            </li>
          </ul>
        </div>
        <p className="font-thin">
          The bootcamp also included experience working with data science, UX
          and ciber securityteams to develop a product from start to finish,
          using SCRUM and Agile methodologies and meticulous version control
          with GitHub.
        </p>

        <h2 className="mt-8 font-thin tracking-widest text-lg text-primary">
          Community of Madrid Bilingual Education Program{" "}
          <span className="italic">and</span>
        </h2>
        <h2 className="font-thin tracking-widest text-lg text-primary">
          The Warehouse English Academy
        </h2>
        <h3 className="font-thin tracking-widest text-lg ">English Teacher</h3>
        <p className="font-thin">2020-2022</p>
        <p className="font-thin">
          English as a second language teacher to children and adults.
          Preparation for CambridgeFirst Certificate and Advanced English (C1)
          exams.
        </p>

        <h2 className="mt-8 font-thin tracking-widest text-lg text-primary">
          Department of Human Services, Government of South Australia
        </h2>
        <h3 className="font-thin tracking-widest text-lg ">
          Policy and Project Officer
        </h3>
        <p className="font-thin">2016-2020</p>
        <p className="font-thin">
          Coordination of large-scale inter-department social projects;
          collection and presentationof data relating to projects. Some skills
          and abilities I developed include:
        </p>
        <ul className="mx-8 my-2 list-disc font-thin">
          <li>
            Excellent communication skills , both within a team environment and
            in inter-organisational settings
          </li>
          <li>Stakeholder relations and management</li>
          <li>Procurement processes and grant and contract management</li>
          <li>Competency negotiating contracts and ongoing program funding</li>
          <li> Project data analysis</li>
          <li>Program research and evaluation</li>
        </ul>
      </div>
    </article>
  );
};
