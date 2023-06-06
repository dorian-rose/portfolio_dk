import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import express from "../assets/express.png";
import react from "../assets/react.png";
import postgres from "../assets/postgres.png";
import jest from "../assets/jest.png";

export const Stacks = () => {
  return (
    <div className="grid grid-cols-6 w-3/4 block m-auto mt-8 sm:mt-16">
      <div className="m-4 w-12 sm:w-20">
        <img
          className="relative top-1/2 -translate-y-1/2 w-3/4"
          src={node}
          alt="node.js logo"
        />
      </div>

      <div className="m-4 w-12 sm:w-20">
        <img
          className="relative top-1/2 -translate-y-1/2 "
          src={express}
          alt="express.js logo"
        />
      </div>
      <div className="m-4 w-12 sm:w-20">
        <img
          className="relative top-1/2 -translate-y-1/2 w-3/5 m-auto"
          src={react}
          alt="react logo"
        />
      </div>
      <div className="m-4 w-12 sm:w-20">
        <img
          className="relative top-1/2 -translate-y-1/2"
          src={mongo}
          alt="mongo logo"
        />
      </div>
      <div className="m-4 w-12 sm:w-20">
        <img
          className="relative top-1/2 -translate-y-1/2 w-3/4 m-auto"
          src={postgres}
          alt="postgres logo"
        />
      </div>
      <div className="m-4 w-12 sm:w-20">
        <img
          className="relative top-1/2 -translate-y-1/2 w-1/2 m-auto"
          src={jest}
          alt="jest logo"
        />
      </div>
    </div>
  );
};
