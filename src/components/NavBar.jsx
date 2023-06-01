import logo from "../assets/logo.svg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Hamburger } from "./Hamburger";
import { NavLinks } from "./NavLinks";

export const NavBar = () => {
  const location = useLocation();
  const [background, setBackground] = useState("");
  const [menuHidden, setMenuHidden] = useState("hidden");
  const changeDisplay = () => {
    if (menuHidden == "block") {
      setMenuHidden("hidden");
    } else {
      setMenuHidden("block");
    }
  };

  return (
    <nav
      className={` pt-4 pb-10 ${
        location.pathname === "/" ? "bg-background " : ""
      }`}
    >
      <div className="w-12">
        <img
          className="w-16 start-10 absolute top-10 "
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
