import { NavLink, Link } from "react-router-dom";

export const NavLinks = () => {
  return (
    <div>
      <ul className="relative p-4 sm:pt-6 ms-16 flex flex-col sm:flex-row text-end sm:justify-end mx-10 sm:mx-2  lg:mx-10">
        <li className="py-1 md:py-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "text-primary font-normal" : ""
              } m-2 font-thin hover:text-primary`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="py-1 md:py-0">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "text-primary font-normal" : ""
              } m-2 font-thin hover:text-primary`
            }
          >
            About Me
          </NavLink>
        </li>
        <li className="py-1 md:py-0">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "text-primary font-normal" : ""
              } m-2 font-thin hover:text-primary`
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="py-1 md:py-0">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "text-primary font-normal" : ""
              } m-2 font-thin hover:text-primary`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
