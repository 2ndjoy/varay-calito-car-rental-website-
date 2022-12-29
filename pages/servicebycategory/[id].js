import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../components/Context/AuthProvider";
import Gallery from "../../components/Gallery/Gallery";
import Loader from "../../components/Loader/Loader";

const service = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const router = useRouter();
  // console.log(router.pathname);

  useEffect(() => {
    fetch(
      `https://varay-calito-server.vercel.app/services/${router?.query?.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setLoading(false);
      });
  }, [datas]);

  return (
    <div className="py-12">
      <div className="lg:flex lg:flex-wrap lg:gap-5 grid justify-center">
        {loading ? (
          <Loader></Loader>
        ) : (
          datas?.map((data) => (
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <Gallery img={data?.img}></Gallery>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data?.carName}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleRent(data)}
                    className="btn btn-primar border-none hover:text-black bg-gradient-to-r from-blue-400 to-violet-300 text-black font-semibold"
                    style={{ backgroundColor: "blueviolet" }}
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default service;
