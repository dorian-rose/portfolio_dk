import logo from "../assets/logo.svg";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hamburger } from "./Hamburger";
import { NavLinks } from "./NavLinks";

export const NavBar = () => {
  const location = useLocation();

  const [menuHidden, setMenuHidden] = useState("hidden");

  useEffect(() => {
    collapseNavbar();
  }, [location]);

  const changeDisplay = () => {
    if (menuHidden == "block") {
      setMenuHidden("hidden");
    } else {
      setMenuHidden("block");
    }
  };

  const collapseNavbar = () => {
    setMenuHidden("hidden");
  };

  return (
    <nav
      className={` pt-4 pb-10 ${
        location.pathname === "/contact"
          ? "max-w-2xl m-auto"
          : "max-w-none m-auto md:mx-28"
      }`}
    >
      <div className="w-16 start-16 relative top-12">
        <img
          className="w-16 "
          src={logo}
          alt="Dorian Kelly Web Development logo"
        />
      </div>

      <div className="ms-24 flex justify-end mx-5 pt-6  sm:hidden">
        <Hamburger changeDisplay={changeDisplay} menuHidden={menuHidden} />
      </div>
      <div className={`${menuHidden} sm:block`}>
        <NavLinks />
      </div>
    </nav>
  );
};
