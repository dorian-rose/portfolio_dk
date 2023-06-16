import dorian from "../assets/dorian.png";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";

export const AboutPage = () => {
  return (
    <>
      <section className="grid md:grid-cols-2 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <div className="mx-8 relative top-1/2 -translate-y-1/2 text-center">
            <h1 className="md:mt-8 font-light tracking-widest mb-4 sm:mb-10 md:mb-4 text-2xl sm:text-4xl text-primary ">
              About me
            </h1>
            <p className="font-thin">
              Hello, and thank you for visiting my website! Let me introduce
              myself. I am a passionate and driven full stack web developer
              specializing in the MERN/PERN stack. With a strong command of
              Mongo, SQL, Express.js, React.js, and Node.js, I have successfully
              developed both the front and back ends, including Rest APIs, of
              various applications, guiding them from inception to deployment.
              In the frontend, utilisation of web semantics for optimal SEO and
              accessibility are principles that I value, and I strive for
              pixel-perfect replication of wireframes when implementing the
              styling of a page. Additionally, I have a proven track record of
              adhering to best practices in documentation and version control,
              ensuring seamless collaboration and efficient project management.
            </p>
            <p className="mt-4 font-thin">
              Alongside my technical expertise, I bring eight years of
              invaluable experience in project coordination and stakeholder
              relations across various sectors. These experiences have further
              strengthened my problem-solving abilities, adaptability, and the
              aptitude to excel in dynamic professional environments. As an
              Australian national with residency and work rights in Europe, I am
              fluent in English and Spanish, allowing me to effectively
              communicate and thrive in multicultural settings.
            </p>
          </div>
          {/* <a
            className="text-center font-thin text-primary hover:underline"
            href="https://www.linkedin.com/in/dorian-kelly/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a> */}
        </article>
        <div className="m-8 ">
          <img
            className="w-full rounded-xl max-w-xs block m-auto md:relative md:top-1/2 md:-translate-y-1/2 mt-6 md:mt-14 text-center"
            src={dorian}
            title="Dorian Kelly fullstack web developer"
            alt="Close up of Dorian smiling, wearing a pink shirt, a world map and plant in background"
          />
        </div>
      </section>
      <section>
        <Education />
        <Experience />
      </section>
      <section>
        <article className="my-10 pt-8 font-thin mx-12 text-center border-t border-primary">
          I am passionate about continuous learning and growth as a developer.
          With my technical aptitude, collaborative mindset, and rich
          professional background, I am committed to taking on new and exciting
          projects that push boundaries and contribute to the success of
          organizations and clients. I invite you to explore my projects, and
          you are interested in discussing potential collaborations, I would be
          delighted to connect with you.
        </article>
      </section>
    </>
  );
};
