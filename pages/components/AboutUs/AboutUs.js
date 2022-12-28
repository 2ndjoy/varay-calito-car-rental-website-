import Link from "next/link";
import React from "react";
import PrimaryButton from "../../../components/PrimaryButton.js/PrimaryButton";

const AboutUs = () => {
  return (
    <div className="hero min-h-screen px-16" style={{ color: "white" }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="relative lg:flex hidden w-1/2">
          <img
            alt=""
            src="https://i.ibb.co/XYG4qm3/bann5.jpg"
            className="w-4/5 rounded shadow-2xl"
          />
          <img
            alt=""
            src="https://i.ibb.co/XYG4qm3/bann5.jpg"
            className="absolute w-3/5 right-5 top-1/2 rounded shadow-2xl"
          />
        </div>
        <div>
          <h1 className="text-5xl py-5 font-bold">ABOUT US</h1>
          <h1 className="text-3xl font-bold">
            We provide best cars in this city
          </h1>
          <p className="py-6">
            We have plenty of cars, also we can provide a driver <br />
            We ensure safety which is our first priority. <br />
            Before handing to you, we always check our cars.
          </p>
          <Link href="/aboutus/aboutus">
            <PrimaryButton classes="p-2 rounded">Learn More</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
