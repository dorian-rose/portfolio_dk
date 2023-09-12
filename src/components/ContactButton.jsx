import { Link } from "react-router-dom";

export const ContactButton = () => {
  return (
    <Link
      className="font-thin tracking-wide block m-auto w-fit mt-13 xl:mt-16 2xl:mt-20 py-2 px-4  bg-primary text-background border border-primary hover:bg-background hover:text-primary rounded-md px-2 shadow-lg"
      to="/contact"
    >
      Contact me
    </Link>
  );
};
