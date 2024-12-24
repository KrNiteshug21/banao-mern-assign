import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const SignUp = () => {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div className="flex-grow flex-1 gap-4 p-4">
      <div className="space-y-4 p-4">
        <h2 className="font-semibold text-2xl">Create Account</h2>
        <form className="flex flex-col justify-stretch">
          <div className="flex">
            <input
              className="border-2 px-4 py-2 outline-none"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border-2 px-4 py-2 outline-none"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <input
            className="border-2 px-4 py-2 outline-none"
            type="email"
            placeholder="Email"
          />
          <div className="relative w-full">
            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="top-1/2 right-2 absolute -translate-y-1/2"
            >
              {!showPwd ? <IoEyeOutline /> : <IoEyeOffOutline />}
            </button>
            <input
              className="border-2 px-4 py-2 w-full outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
          <input
            className="border-2 px-4 py-2 outline-none"
            type="confirm-password"
            placeholder="Confirm Password"
          />
          <button className="bg-blue-500 my-4 px-4 py-2 rounded-full text-white">
            Create Account
          </button>
        </form>
        <div className="flex justify-center items-center gap-4 border-2 px-4 py-2">
          <img src="/img/sign/facebook.svg" alt="facebook" />
          <p>Sign up with Facebook</p>
        </div>
        <div className="flex justify-center items-center gap-4 border-2 px-4 py-2">
          <img src="/img/sign/google.svg" alt="google" />
          <p>Sign up eith Google</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
