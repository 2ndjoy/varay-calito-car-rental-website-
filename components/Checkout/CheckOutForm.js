import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthProvider";

const CheckOutForm = ({ newData }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    toast.success("Paid succesfully");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-sm mt-4 btn-primary" type="submit">
          Pay
        </button>
      </form>
      <p> This is demo</p>
    </>
  );
};

export default CheckOutForm;
