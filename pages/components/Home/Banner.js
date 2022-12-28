import React from "react";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className="relative w-full">
      <div className={classes.bannerImg}>
        <img src="https://i.ibb.co/c3Tn71g/bann2.jpg" alt="" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-3/4 lg:right-60 md:right-0 right-32 top-2/4">
        <h1
          className="lg:text-4xl text-xl font-semibold "
          style={{ color: "white" }}
        >
          <i>
            RENT CARS FROM US
            <br />
            WITH A REASONABLE
            <br /> BUDGET
          </i>
        </h1>
      </div>
      {/* <div className="absolute flex justify-start transform -translate-y-1/2 lg:left-60 md:left-60 left-32 top-3/4 gap-3"> */}
      {/* <Link to='/services'> <button className='btn btn-accent btn-primary'>Discover More</button></Link> */}
      {/* </div> */}
    </div>
  );
};

export default Banner;
