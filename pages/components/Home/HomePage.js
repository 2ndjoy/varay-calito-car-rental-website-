import React from "react";
import Category from "../category/category";
import Banner from "./Banner";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-12">
        <h1 className="text-3xl text-center mb-5">Categories</h1>
        <Category></Category>
      </div>
    </div>
  );
};

export default HomePage;
