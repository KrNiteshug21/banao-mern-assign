import React from "react";

const SuccessModal = ({ children }) => {
  return (
    <section>
      <div className="top-1/2 left-1/2 z-50 fixed flex justify-center items-center bg-black/50 w-full h-full -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white p-8 rounded-md w-[400px]">{children}</div>
      </div>
    </section>
  );
};

export default SuccessModal;
