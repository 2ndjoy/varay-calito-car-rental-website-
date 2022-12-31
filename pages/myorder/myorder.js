import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../components/Context/AuthProvider";
import Loader from "../../components/Loader/Loader";

const myorder = () => {
  const { user } = useContext(AuthContext);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  //   console.log(user?.email);

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
  const handlePay = (id) => {
    console.log(id);
  };

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
                      <button
                        onClick={() => handlePay(data._id)}
                        className="btn btn-ghost btn-xs"
                      >
                        Pay {"  "}${data.serviceCharge}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default myorder;
