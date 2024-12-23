import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/img/logo.svg" alt="logo" />
      </div>
      <form>
        <CiSearch />
        <input type="text" placeholder="Search" />
      </form>
      <div>
        <p>
          Create account. <span>It's free</span>
        </p>
        <MdArrowDropDown />
      </div>
    </nav>
  );
};
