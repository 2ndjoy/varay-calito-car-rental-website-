import React, { useEffect, useState } from "react";
import Gallery from "../../../components/Gallery/Gallery";
import Loader from "../../../components/Loader/Loader";
import PrimaryButton from "../../../components/PrimaryButton.js/PrimaryButton";

const ServicePage = ({ handleRent }) => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-12 mx-1" style={{ color: "white" }}>
      <div className="lg:flex lg:flex-wrap lg:gap-5 grid justify-center">
        {loading ? (
          <Loader></Loader>
        ) : (
          datas.map((data) => (
            <div className="card card-compact w-72 bg-base-100 shadow-xl">
              <figure>
                <Gallery img={data.img}></Gallery>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.carName}</h2>

                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-end">
                  <p className="">Service Charge ${data.serviceCharge}</p>

                  <button
                    onClick={() => handleRent(data)}
                    className="btn btn-primary text-white font-semibold border-none hover:text-black bg-gradient-to-r from-blue-400 to-violet-300 text-black font-semibold"
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

export default ServicePage;
