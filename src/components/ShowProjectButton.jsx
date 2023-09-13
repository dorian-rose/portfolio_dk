import React from "react";

export const ShowProjectButton = ({ display, setDisplay, title }) => {
  return (
    <button
      onClick={
        display == "hidden" ? () => setDisplay("") : () => setDisplay("hidden")
      }
      className="block mt-1 lg:mt-5  ps-4 sm:pe-10 md:pe-0 py-2 w-96 font-thin bg-background flex justify-between hover:border hover:border-primary"
    >
      <h2 className="text-sm sm:text-base font-light tracking-wide text-left mt-0.5 ">
        {title}
      </h2>
      {display === "" ? (
        <div className="flex  hover:pointer">
          <p className="text-xs sm:text-sm mt-0.5 me-1 text-primary hover:underline">
            Hide
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#63171C"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ) : (
        <div className="flex hover:pointer">
          <p className="text-xs sm:text-sm mt-1 sm:mt-0.5 me-1 text-primary hover:underline">
            View more
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#63171C"
            className="w-6 h-6"
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
  );
};
