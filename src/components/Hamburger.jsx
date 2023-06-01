export const Hamburger = ({ changeDisplay, menuHidden }) => {
  return (
    <>
      <button
        className="text-end ms-3 me-8 text-primary"
        onClick={changeDisplay}
      >
        {menuHidden == "block" ? (
          <p className="me-6 text-xl">X</p>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            className="w-8 h-6 m-0 inline stroke-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
    </>
  );
};
