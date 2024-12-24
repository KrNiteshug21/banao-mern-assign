import React, { useState } from "react";
import SuccessModal from "./SuccessModal";
import { IoMdCloseCircle } from "react-icons/io";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const FormModal = ({ setShowForm }) => {
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <section>
      <div className="top-1/2 left-1/2 z-50 fixed flex justify-center items-center bg-black/70 w-full h-full -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white rounded-md w-[900px]">
          <div className="relative">
            <div
              className="-top-8 -right-8 absolute text-white cursor-pointer"
              onClick={() => setShowForm(false)}
            >
              <IoMdCloseCircle size={32} />
            </div>
            <div className="bg-green-100 p-4 rounded-t-md">
              <p className="text-center text-green-600">
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </p>
            </div>
            <div className="flex justify-between items-start gap-4 p-4">
              {toggleForm ? (
                <SignUp setToggleForm={setToggleForm} />
              ) : (
                <SignIn setToggleForm={setToggleForm} />
              )}
              <div className="flex flex-col justify-between items-stretch gap-4">
                <div
                  onClick={() => setToggleForm(!toggleForm)}
                  className="flex justify-end items-center gap-2"
                >
                  {toggleForm ? (
                    <>
                      <p>Already have an account? </p>
                      <button className="text-blue-600">Sign In</button>
                    </>
                  ) : (
                    <>
                      <p>Don't have an account yet? </p>
                      <button className="text-blue-600">
                        Create new for free
                      </button>
                    </>
                  )}
                </div>
                <img src="/img/sign/background.svg" alt="background" />
                <p className="text-gray-500 text-sm">
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormModal;
