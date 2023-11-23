import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const NavLinks = () => {
  const location = useLocation();
  return (
    <div>
      <ul
        className={` ${
          location.pathname === "/" ? "" : "bg-white sm:bg-inherit"
        } absolute right-0 z-30 rounded-lg sm:relative  pt-4 pe-4 ps-10 pb-10 sm:p-4 sm:pt-6 ms-16 flex flex-col sm:flex-row text-end sm:justify-end mx-10 sm:mx-2  lg:mx-10`}
        // className="relative p-4 sm:pt-6 ms-16 flex flex-col sm:flex-row text-end sm:justify-end mx-10 sm:mx-2  lg:mx-10"
      >
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
