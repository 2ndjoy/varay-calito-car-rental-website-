import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

const index = () => {
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
    <div className="py-12">
      <div className="lg:flex lg:flex-wrap lg:gap-5 grid justify-center">
        {loading ? (
          <Loader></Loader>
        ) : (
          datas.map((data) => (
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={data.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.carName}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Rent Now</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default index;
