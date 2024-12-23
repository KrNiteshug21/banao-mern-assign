import React from "react";

import { MdArrowDropDown } from "react-icons/md";

const Category = () => {
  return (
    <div className="flex justify-between items-center gap-4 mt-2 border-b-2 w-full">
      <div className="flex gap-4 text-lg">
        <a to="/" className="py-4 border-b-2 border-blue-600 cursor-pointer">
          All Post (32)
        </a>
        <a
          to="/"
          className="py-4 hover:border-b-2 hover:border-blue-600 cursor-pointer"
        >
          Article
        </a>
        <a
          to="/"
          className="py-4 hover:border-b-2 hover:border-blue-600 cursor-pointer"
        >
          Event
        </a>
        <a
          to="/"
          className="py-4 hover:border-b-2 hover:border-blue-600 cursor-pointer"
        >
          Education
        </a>
        <a
          to="/"
          className="py-4 hover:border-b-2 hover:border-blue-600 cursor-pointer"
        >
          Job
        </a>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-md">
          <span>Write a Post</span>
          <MdArrowDropDown size={20} />
        </button>
        <button className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md text-white">
          <img src="/img/community.svg" alt="community" />
          <span>Join Group</span>
        </button>
      </div>
    </div>
  );
};

export default Category;
