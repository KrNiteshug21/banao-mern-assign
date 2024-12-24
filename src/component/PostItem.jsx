import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoMdShare } from "react-icons/io";

const PostItem = ({ post }) => {
  const [trigger, setTrigger] = useState(false);

  return (
    <div className="space-y-4 border-2 border-gray-200 rounded-md w-[700px]">
      {post?.image && (
        <div className="rounded-t-md w-full h-[220px] overflow-hidden">
          <img
            className="w-full h-full object-center object-cover"
            src={post?.image}
            alt="author"
          />
        </div>
      )}
      <div className="space-y-4 p-4">
        <p className="font-medium text-lg">{post.type}</p>
        <div className="flex justify-between items-center gap-10">
          <h2 className="font-semibold text-2xl">{post.title}</h2>
          <div className="relative">
            <button
              className={`${trigger ? "bg-gray-300" : ""} p-2 rounded-md `}
              onClick={() => setTrigger(!trigger)}
            >
              <BsThreeDots size={32} />
            </button>
            {trigger && (
              <div className="top-10 right-0 absolute bg-white shadow-lg rounded-md w-40">
                <p className="hover:bg-gray-200 px-4 py-2 rounded-md w-full cursor-pointer">
                  Edit
                </p>
                <p className="hover:bg-gray-200 px-4 py-2 rounded-md w-full cursor-pointer">
                  Report
                </p>
                <p className="hover:bg-gray-200 px-4 py-2 rounded-md w-full cursor-pointer">
                  Option 3
                </p>
              </div>
            )}
          </div>
        </div>
        {post.description && <p className="text-lg">{post.description}</p>}
        {post.type === "meetup" && (
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img src="/img/date.svg" alt="logo" />
              <p>{post.date}</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/img/location.svg" alt="logo" />
              <p>{post.location}</p>
            </div>
          </div>
        )}
        {post.type === "job" && (
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img src="/img/job.svg" alt="logo" />
              <p>{post.company}</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/img/location.svg" alt="logo" />
              <p>{post.location}</p>
            </div>
          </div>
        )}

        {post.type === "meetup" && (
          <button className="border-2 px-4 py-2 rounded-md w-full text-lg text-orange-600">
            Visit Website
          </button>
        )}
        {post.type === "job" && (
          <button className="border-2 px-4 py-2 rounded-md w-full text-green-600 text-lg">
            Apply on timestamps
          </button>
        )}
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full w-12 h-12 overflow-hidden">
              <img
                width={60}
                height={60}
                src={post.authorImg}
                alt="author"
                className="w-full h-full object-center object-cover"
              />
            </div>
            <p className="font-bold">{post.authorName}</p>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <img src="/img/eyes.svg" alt="eye" />
              <p>{post.views} views</p>
            </div>
            <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md">
              <IoMdShare size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
