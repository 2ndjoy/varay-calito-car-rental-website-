import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../components/Context/AuthProvider";
import ServicePage from "../components/ServicePage/ServicePage";

const service = () => {
  const { user } = useContext(AuthContext);
  const handleRent = (id) => {
    if (user?.email) {
      toast.success("You Have rented successfully");
    } else {
      router.push("/login/login");
    }
  };
  return (
    <div>
      <ServicePage handleRent={handleRent}></ServicePage>
    </div>
  );
};

export default service;
