import React from "react";

export const ShowProjectButton = ({ display, setDisplay, title, stack }) => {
  return (
    <div className="grid md:grid-cols-2 ">
      <button
        onClick={
          display == "hidden"
            ? () => setDisplay("")
            : () => setDisplay("hidden")
        }
        className=" mt-1 lg:mt-5 py-2 w-full font-thin flex justify-between md:justify-start"
      >
        <h2
          className={`text-primary sm:text-lg font-light tracking-wide text-left me-5 sm:me-5 lg:me-10 ${
            display === "hidden" && "relative top-1/2 -translate-y-1/2"
          }`}
        >
          {title}
        </h2>
        {display === "" ? (
          <div className="relative flex  hover:pointer">
            <p className="text-xs lg:text-sm mt-1 me-1 text-primary hover:underline ">
              View less
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#63171C"
              className="w-4 h-4 mt-1 lg:mt-0.5 lg:w-6 lg:h-6"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : (
          <div className="flex hover:pointer relative top-1/2 -translate-y-1/2 md:ms-5">
            <p className="text-xs lg:text-sm mt-1 me-1 text-primary hover:underline">
              View more
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#63171C"
              className="w-4 h-4 mt-1 lg:mt-0.5 lg:w-6 lg:h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </button>
      <div className="italic sm:mt-3 lg:mt-7 font-thin text-primary w-fit">
        <p
          className={`${
            display === "hidden"
              ? "md:ms-2 text-xs lg:text-base mt-2 sm:mt-0 md:mt-2  mb-6 md:mb-0"
              : "hidden"
          } `}
        >
          {stack}
        </p>
      </div>
    </div>
  );
};
