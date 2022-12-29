import { useRouter } from "next/router";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../components/Context/AuthProvider";
import AboutUs from "../AboutUs/AboutUs";
import Category from "../Category/Category";
import ServicePage from "../ServicePage/ServicePage";
import Banner from "./Banner";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const handleRent = (data) => {
    if (user?.email) {
      const rent = {
        image: data.img,
        carName: data.carName,
        userEmail: user.email,
        userName: user.displayName,
      };

      fetch("https://varay-calito-server.vercel.app/bookings", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(rent),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            toast.success(`You Have rented successfully`);
          }
        });
    } else {
      toast.error("Please log in ");
      router.push("/login/login");
    }
    console.log(data);
  };

  return (
    <div>
      <Banner></Banner>
      <div className="my-12">
        <h1
          className="text-3xl text-center mb-5 font-bold"
          style={{ color: "white" }}
        >
          CATAGORIES
        </h1>
        <Category></Category>
      </div>
      <div className="my-12">
        <h1
          className="text-3xl text-center mb-5 font-bold"
          style={{ color: "white" }}
        >
          RENT YOUR CAR
        </h1>
        <ServicePage handleRent={handleRent}></ServicePage>
      </div>
      <div className="my-12">
        {/* <h1 className="text-3xl text-center font-bold">ABOUT US</h1> */}
        <AboutUs></AboutUs>
      </div>
    </div>
  );
};

export default HomePage;
