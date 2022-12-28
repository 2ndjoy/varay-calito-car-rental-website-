import React from "react";

const PrimaryButton = ({ children, classes }) => {
  return (
    <button
      className={`hover:text-black bg-gradient-to-r from-blue-400 to-violet-300 text-black font-semibold ${classes}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
