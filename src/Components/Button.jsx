import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, click, category, id }) => {
  const navigate = useNavigate();
  function onClickHandler() {
    if (category && id) {
      navigate(`/${category}/${id}`);
    } else if (click) {
      click(text);
    } else if (category) {
      navigate(`/${category}/`);
    } else {
      console.log("clicked");
    }
  }
  return (
    <div
      className="mx-5 transition h-fit w-fit bg-sky-600 rounded-lg p-2 text-white font-bold hover:bg-white hover:text-black shadow-lg hover:cursor-pointer"
      onClick={() => onClickHandler()}
    >
      {text}
    </div>
  );
};

export default Button;
