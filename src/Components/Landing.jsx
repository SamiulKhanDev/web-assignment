import React from "react";
import Button from "./Button";
import List from "./List";
import HideList from "./HideList";

const Landing = () => {
  return (
    <div className="h-3/4 w-full flex">
      <div className="h-full w-full p-3 flex flex-col justify-center items-center bg-slate-800 text-white">
        <div className="mb-10 text-center">
          <h1 className="font-bold text-4xl m-5">
            Grow more.
            <br />
            Spend less.
          </h1>
          <p className="text-lg leading-7 text-center ">
            Get access to up to $1,000,000+ in savings on the best software to
            scale your business.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="m-2">Excellent trustpilot</h1>
          <Button text={"Join For Free"} />
        </div>
      </div>
      <div className="hidden  md:w-full md:flex md:justify-center">
        <List />
        <HideList />
      </div>
    </div>
  );
};

export default Landing;
