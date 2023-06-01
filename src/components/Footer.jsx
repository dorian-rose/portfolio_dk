import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h4>Work Inquiry</h4>
          <p>Let's collaborate</p>
        </div>
        <div>
          <a href="/contact.html" title="Get in touch with Dorian">
            Contact Me
          </a>
        </div>
      </div>

      <div>
        <a title="email Dorian Kelly" href="mailto:dorianrkelly@gmail.com">
          dorianrkelly@gmail.com
        </a>
      </div>
      <div>
        <a
          title="Dorian's Twitter profile"
          href="https://twitter.com/DorianKelly16"
          target="_blank"
        >
          twitter
        </a>
        <a
          title="Dorian's Github profile "
          href="https://github.com/dorian-rose"
          target="_blank"
        >
          github
        </a>
        <a
          title="Dorian's LinkedIn profile"
          href="https://www.linkedin.com/in/dorian-kelly-0785b0204/"
          target="_blank"
        >
          linkedin
        </a>
      </div>
      <p>
        <small>
          <a href="https://github.com/dorian-rose/dorian-kelly-portfolio">
            Open-source code
          </a>
          by Dorian Kelly
        </small>
      </p>
    </footer>
  );
};
