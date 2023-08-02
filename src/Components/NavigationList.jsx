import React from "react";
import Button from "./Button";

const NavigationList = () => {
  const allCategory = [
    "Project Management",
    "Data ",
    "Customer",
    "Development",
    "Marketing",
    "Finance",
    "Communication",
    "Sales",
    "Business",
    "IT",
    "Human Resources",
    "Operations Management",
  ];
  return (
    <div className="flex overflow-x-scroll h-fit w-screen bg-slate-800 font-bold text-gray-400 items-center justify-between p-2 cursor-pointer">
      {allCategory.map((c) => {
        return (
          <Button
            text={c}
            category={c.trim().split(" ").join("").toLowerCase()}
          />
        );
      })}
    </div>
  );
};

export default NavigationList;
