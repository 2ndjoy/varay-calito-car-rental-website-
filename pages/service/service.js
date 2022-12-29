import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../components/Context/AuthProvider";
import ServicePage from "../components/ServicePage/ServicePage";

const service = () => {
  const { user } = useContext(AuthContext);

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
      <ServicePage handleRent={handleRent}></ServicePage>
    </div>
  );
};

export default service;
