import React, { useEffect, useState } from "react";
import Gallery from "../../../components/Gallery/Gallery";
import Loader from "../../../components/Loader/Loader";
import PrimaryButton from "../../../components/PrimaryButton.js/PrimaryButton";

const ServicePage = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://varay-calito-server.vercel.app/service")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="py-12 mx-1">
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
                  <PrimaryButton classes="p-2 rounded">Rent Now</PrimaryButton>
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
