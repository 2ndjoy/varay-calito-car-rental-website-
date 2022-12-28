import Link from "next/link";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://varay-calito-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div>
      <div
        className="grid justify-center lg:flex lg:flex-wrap gap-5 "
        style={{ color: "white" }}
      >
        {datas.map((data) => (
          <Link
            href={`/servicebycategory/${data._id}`}
            className="card w-64 bg-base-100 shadow-xl my-5 image-full"
          >
            <figure>
              <img src={data.img} alt="Shoes" />
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
