import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Category from "../category/category";
import ServicePage from "../ServicePage/ServicePage";
import Banner from "./Banner";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-12">
        <h1 className="text-3xl text-center mb-5 font-bold">CATAGORIES</h1>
        <Category></Category>
      </div>
      <div className="my-12">
        <h1 className="text-3xl text-center mb-5 font-bold">RENT YOUR CAR</h1>
        <ServicePage></ServicePage>
      </div>
      <div className="my-12">
        {/* <h1 className="text-3xl text-center font-bold">ABOUT US</h1> */}
        <AboutUs></AboutUs>
      </div>
    </div>
  );
};

export default HomePage;
