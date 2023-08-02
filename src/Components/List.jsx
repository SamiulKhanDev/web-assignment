import React from "react";
import SmallCard from "./SmallCard";

const List = () => {
  return (
    <div className="flex flex-col p-1 overflow-y-scroll mx-3">
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

export default List;
