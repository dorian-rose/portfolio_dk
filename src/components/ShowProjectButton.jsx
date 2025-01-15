import React from "react";

export const ShowProjectButton = ({ display, setDisplay, title, stack }) => {
  return (
    <div className="flex flex-col md:flex-row gap-1 md:gap-10 lg:gap-16 items-center">
      <button
        onClick={
          display == "hidden"
            ? () => setDisplay("")
            : () => setDisplay("hidden")
        }
        className="w-full font-thin flex justify-between items-center"
      >
        <h2
          className={
            "text-primary sm:text-lg font-light tracking-wide text-left"
          }
        >
          {title}
        </h2>
        <div className="hover:pointer">
          {display === "" ? (
            <div className="flex gap-2">
              <p className="text-xs lg:text-sm text-primary hover:underline ">
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
            <div className="flex gap-2">
              <p className="text-xs lg:text-sm mt-1 text-primary hover:underline">
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
        </div>
      </button>
      <div className="italic font-thin text-primary w-full">
        <p
          className={`${
            display === "hidden" ? "text-xs lg:text-base" : "hidden"
          } `}
        >
          {stack}
        </p>
      </div>
    </div>
  );
};
