import Link from "next/link";
import React from "react";

const eroor = () => {
  return (
    <div className="text-center text-xl lg:py-36 py-40 lg:my-36 my-24">
      <span className="text-5xl font-bold">404 Error </span>
      <br />
      <br />
      Go to{" "}
      <Link className="text-xl font-bold text-white" href="/">
        Home
      </Link>
    </div>
  );
};

export default eroor;
