import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import FormModal from "./FormModal";

const Navbar = () => {
  const isUserLoggedIn = localStorage.getItem("user");
  const [showForm, setShowForm] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      {showForm && <FormModal setShowForm={setShowForm} />}
      <nav className="flex justify-between items-center p-4">
        <div>
          <img src="/img/logo.svg" alt="logo" />
        </div>
        <form className="relative">
          <CiSearch size={20} className="left-4 absolute translate-y-1/2" />
          <input
            className="border-2 bg-gray-200 px-4 py-1 pl-10 rounded-full w-96 text-base outline-none"
            type="text"
            placeholder="Search for your favorite groups in ATG"
          />
        </form>
        {isUserLoggedIn ? (
          <div className="relative flex items-center gap-4">
            <img
              className="rounded-full w-10 h-10 object-center object-cover"
              src="/img/joseph.jpg"
              alt="user"
            />
            <p className="text-lg">John Doe</p>
            <button onClick={() => setShowDropdown(!showDropdown)}>
              <MdArrowDropDown size={24} />
            </button>
            {showDropdown && (
              <div className="top-12 right-0 absolute flex flex-col bg-white shadow-lg rounded-md w-36">
                <pbutton className="hover:bg-gray-300 px-4 py-2 rounded-md w-full cursor-pointer">
                  Profile
                </pbutton>
                <pbutton className="hover:bg-gray-300 px-4 py-2 rounded-md w-full cursor-pointer">
                  Settings
                </pbutton>
                <pbutton
                  onClick={handleLogout}
                  className="hover:bg-gray-300 px-4 py-2 rounded-md w-full cursor-pointer"
                >
                  Logout
                </pbutton>
              </div>
            )}
          </div>
        ) : (
          <div
            onClick={() => setShowForm(true)}
            className="flex items-center text-lg cursor-pointer"
          >
            <p>
              Create account. <span className="text-blue-600">It's free</span>
            </p>
            <MdArrowDropDown size={24} />
          </div>
        )}
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
