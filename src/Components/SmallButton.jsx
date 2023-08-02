import React from "react";

export const SmallButton = ({ isHot }) => {
  return (
    <div className="transition h-fit w-fit p-2 bg-slate-800 text-white shadow-lg rounded-lg  hover:text-black mr-5 hover:cursor-pointer">
      {isHot ? "Hot" : "Premium"}
    </div>
  );
};
