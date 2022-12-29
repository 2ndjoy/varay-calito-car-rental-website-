import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Context/AuthProvider";
import Loader from "../../components/Loader/Loader";

const myorder = () => {
  const { user } = useContext(AuthContext);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  //   console.log(user?.email);

  try {
    useEffect(() => {
      fetch(
        `https://varay-calito-server.vercel.app/bookings?userEmail=${user?.email}`
      )
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
                <th>Actions</th>
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
                      <button className="btn btn-ghost btn-xs">Cancel</button>
                    </td>
                    <th></th>
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
