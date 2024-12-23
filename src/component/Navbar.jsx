import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import CreateAccount from "./CreateAccount";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm && <CreateAccount setShowForm={setShowForm} />}
      <nav className="flex justify-between items-center p-4">
        <div>
          <img src="/img/logo.svg" alt="logo" />
        </div>
        <form className="relative">
          <CiSearch size={20} className="left-4 absolute translate-y-1/2" />
          <input
            className="border-2 bg-gray-200 px-4 py-1 pl-10 rounded-full w-96 text-lg outline-none"
            type="text"
            placeholder="Search"
          />
        </form>
        <div
          onClick={() => setShowForm(true)}
          className="flex items-center text-lg cursor-pointer"
        >
          <p>
            Create account. <span className="text-blue-600">It's free</span>
          </p>
          <MdArrowDropDown size={24} />
        </div>
      </nav>
      <div className="bg-gradient-to-t from-black/45 to-black/60">
        <img
          className="w-full h-[440px] object-center object-cover"
          src="/img/7d56a759ac56bc165f65c40094aba4e8.jpg"
          alt="banner"
        />
      </div>
    </>
  );
};

export default Navbar;
