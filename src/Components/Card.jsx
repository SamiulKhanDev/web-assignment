import React from "react";
import { SmallButton } from "./SmallButton";
import Button from "./Button";
export const Card = ({
  id,
  name,
  desc,
  price,
  discount,
  currentPrice,
  category,
  isHot,
}) => {
  return (
    <div class=" transition flex flex-col justify-center h-fit max-h-96 w-fit rounded-lg  m-5 py-8 bg-white shadow-lg hover:shadow-xl hover:bg-slate-800 hover:text-white ">
      <div class="h-3/4 flex flex-col  justify-between">
        <div class="h-2/3 flex items-center">
          <img
            src={`https://api.dicebear.com/6.x/bottts/svg/seed=${Math.floor(
              Math.random() * 1000
            )}`}
            alt=""
            className="rounded-layout  p-1  h-16 w-16 m-4"
          />
          <div className="flex flex-col justify-center item-center p-1 font-body leading-normal text-base font-medium">
            <p className="font-bold">{name}</p>
            <p>{`${desc.substring(0, 100)}...`}</p>
            <p>{price}$</p>
          </div>
        </div>
        <div className="h-2/4 flex items-center text-xs p-1 font-headings text-base font-extrabold mx-3 leading-normal">
          <p>
            Your are getting this product only for{" "}
            <span className="font-bold">{currentPrice}$</span> with{" "}
            <span className="font-bold">{discount}%</span>
            off.
          </p>
        </div>
      </div>
      <div className="h-1/4 flex items-center p-1 px-3">
        <SmallButton isHot={true} />
        <Button text={"Click"} category={category} id={id} />
      </div>
    </div>
  );
};
