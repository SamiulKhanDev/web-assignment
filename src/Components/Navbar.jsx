import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-800 w-full h-fit flex justify-around items-center p-5">
      <h1
        className="text-white font-bold text-3xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        Secret.
      </h1>
      <input
        type="text"
        class="bg-slate-950 outline-none text-gray-400 text-sm rounded-full block w-2/4 p-2.5 mx-2"
        placeholder="Search"
      />
      <div className="hidden md:flex md:justify-evenly md:items-center font-bold w-fit text-gray-400 cursor-pointer">
        <p className="transition hover:text-white  mx-3">White Label & API</p>
        <p className="transition hover:text-white  mx-3"> Affliation</p>
        <p className="transition hover:text-white mx-3">Get $20</p>
        <p className="transition hover:text-white mx-3">Faq</p>
      </div>
    </div>
  );
};

export default Navbar;
