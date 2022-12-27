import React, { useEffect, useState } from "react";

const Category = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/category")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div>
      <div className="grid justify-center lg:flex lg:flex-wrap gap-5 ">
        {datas.map((data) => (
          <div className="card w-64 bg-base-100 shadow-xl my-5 image-full">
            <figure>
              <img src={data.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.categoryName}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
