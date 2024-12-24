import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const initUser = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [user, setUser] = useState(initUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    console.log("User Logged In", user);
    setUser(initUser);
    window.location.reload();
  };

  return (
    <div className="flex-grow flex-1 gap-4 p-4">
      <div className="space-y-4 p-4">
        <h2 className="font-semibold text-2xl">Sign In</h2>
        <form className="flex flex-col justify-stretch">
          <input
            className="border-2 px-4 py-2 outline-none"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
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
              type={showPwd ? "text" : "password"}
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              name="password"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 my-4 px-4 py-2 rounded-full text-white"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-center items-center gap-4 border-2 px-4 py-2">
          <img src="/img/sign/facebook.svg" alt="facebook" />
          <p>Sign in with Facebook</p>
        </div>
        <div className="flex justify-center items-center gap-4 border-2 px-4 py-2">
          <img src="/img/sign/google.svg" alt="google" />
          <p>Sign in with Google</p>
        </div>
        <div className="flex justify-center items-center gap-4 px-4 py-2">
          <p>Forgot Password?</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
