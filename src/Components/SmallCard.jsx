import React from "react";

const SmallCard = ({ name, desc }) => {
  return (
    <div className="transition p-1 m-3 h-fit w-fit flex justify-center items-center rounded-lg shadow-lg hover:bg-slate-800 hover:text-white ">
      <img
        src={`https://api.dicebear.com/6.x/lorelei/svg/seed=${Math.floor(
          Math.random() * 100
        )}`}
        alt=""
        className="h-16 w-16 m-4"
      />
      <div className="font-body leading-normal text-base font-medium p-1">
        <h3 className="font-bold">{name}</h3>
        <p>{desc.substring(0, 50)}</p>
      </div>
    </div>
  );
};

export default SmallCard;
