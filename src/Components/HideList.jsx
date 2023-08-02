import React from "react";
import SmallCard from "./SmallCard";

const HideList = () => {
  return (
    <div className="hidden lg:flex lg:flex-col lg:p-1 lg:overflow-y-scroll lg:mx-3">
      <SmallCard name={"Product 222"} desc={"This is a cloud solution"} />
      <SmallCard name={"Product 222"} desc={"This is a cloud solution"} />
      <SmallCard name={"Product 222"} desc={"This is a cloud solution"} />
      <SmallCard name={"Product 222"} desc={"This is a cloud solution"} />
      <SmallCard name={"Product 222"} desc={"This is a cloud solution"} />
      <SmallCard name={"Product 222"} desc={"This is a cloud solution"} />
      <SmallCard name={"Product 222"} desc={"This is a cloud solution"} />
      <SmallCard name={"Product 222"} desc={"This is a cloud solution"} />
      <SmallCard name={"Product 222"} desc={"This is a cloud solution"} />
    </div>
  );
};

export default HideList;
