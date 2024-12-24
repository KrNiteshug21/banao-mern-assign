import React from "react";
import { FaPen } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const groups = [
  { title: "Leisure", img: "/img/group/leisure.jpg", followed: false },
  { title: "Activism", img: "/img/group/activism.jpg", followed: false },
  { title: "MBA", img: "/img/group/mba.jpg", followed: false },
  { title: "Philosophy", img: "/img/group/philosophy.jpg", followed: false },
];

const GroupItem = ({ group }) => {
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <img
          className="rounded-full w-10 h-10 object-center object-cover"
          src={group.img}
          alt={group.title}
        />
        <p>{group.title}</p>
      </div>
      <button className="bg-gray-300 px-4 py-2 rounded-full">Follow</button>
    </div>
  );
};

const Sidebar = () => {
  const isUserLoggedIn = localStorage.getItem("user");

  return (
    <div className="space-y-8 w-96">
      <form className="relative">
        <img
          className="top-1/2 left-0 absolute transform -translate-y-1/2"
          src="/img/location.svg"
          alt="location"
        />
        <input
          className="px-4 py-2 pl-6 border-b-2 border-black/60 w-full outline-none"
          type={isUserLoggedIn ? "text" : null}
          placeholder={
            isUserLoggedIn ? "Enter your location..." : "Noida, India"
          }
          readOnly={!isUserLoggedIn}
        />
        <div className="top-1/2 right-0 absolute transform -translate-y-1/2">
          {isUserLoggedIn ? <IoMdClose size={24} /> : <FaPen />}
        </div>
      </form>
      <div>
        <p>
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>

      {isUserLoggedIn && (
        <div>
          <div>
            <p>Recommended groups</p>
          </div>
          <div className="space-y-4 my-4">
            {groups.map((group, index) => (
              <GroupItem key={index} group={group} />
            ))}
          </div>
          <p className="text-right text-blue-600">See More...</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
