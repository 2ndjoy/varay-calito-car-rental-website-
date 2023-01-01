import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import CheckOutForm from "../../components/Checkout/CheckOutForm";
import { AuthContext } from "../../components/Context/AuthProvider";
import Loader from "../../components/Loader/Loader";

const stripePromise = loadStripe(
  "pk_test_51M6Rm0BoLlijAEU1Aod6wshPfPouwlRr3BLSxZaXFh9inNeiQlWvIKc3t8uHlawvfZMd058fb1K5FboXEk2atZhx00Z4Os5pdF"
);

const myorder = () => {
  const { user } = useContext(AuthContext);
  const [datas, setDatas] = useState([]);
  const [newData, setNewData] = useState({});
  const [loading, setLoading] = useState(true);
  //   console.log(user?.email);
  const router = useRouter();
  try {
    useEffect(() => {
      fetch(`http://localhost:5000/bookings?userEmail=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setDatas(data);
          setLoading(false);
        });
    }, [user?.email]);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }

  const handleDelete = (id) => {
    console.log(id);

    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = datas.filter((ord) => ord._id !== id);
          setDatas(remaining);
          toast.success(`Canceled Successfully`);

          // refetch();
        }
      });
  };
  // const handlePay = (data) => {
  //   // console.log(id);
  //   setNewData(data);
  //   console.log("newData", newData);
  //   // router.push(`/payment/${id}`);
  // };
  console.log("newData", newData);

  return (
    <div className="pb-24 px-4 mx-4 mb-96">
      {loading ? (
        <Loader></Loader>
      ) : datas?.length === 0 ? (
        <p className="text-center font-bold text-4xl">no data available</p>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Order Name</th>
                <th>Image</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <th></th>
                  <td>Loading..</td>
                  <td>Loading..</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">Loading..</button>
                  </td>
                  <th></th>
                  <th></th>
                </tr>
              ) : (
                datas.map((data) => (
                  <tr>
                    <th></th>
                    <td>{data.carName}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={data.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(data._id)}
                        className="btn btn-ghost btn-xs"
                      >
                        Cancel
                      </button>
                    </td>
                    <td>
                      <label
                        onClick={() => setNewData(data)}
                        htmlFor="my-modal"
                        className="btn"
                      >
                        Pay {"  "}${data.serviceCharge}
                      </label>

                      <input
                        type="checkbox"
                        id="my-modal"
                        className="modal-toggle"
                      />
                      <div className="modal">
                        <div className="modal-box relative">
                          <label
                            htmlFor="my-modal"
                            className="btn btn-sm btn-circle absolute right-2 top-2"
                          >
                            ✕
                          </label>
                          <h3 className="text-lg font-bold">
                            Payment for {newData?.carName}
                          </h3>
                          <p className="py-4">
                            Please pay {"  "}{" "}
                            <span className="text-white">
                              ${newData?.serviceCharge}
                            </span>
                          </p>
                          <div>
                            <Elements stripe={stripePromise}>
                              <CheckOutForm newData={newData}></CheckOutForm>
                            </Elements>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
    </div>
  );
};

export default myorder;
