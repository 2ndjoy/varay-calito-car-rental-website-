import React, { useEffect, useState } from "react";

const payment = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/services/${router?.query?.id}`)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setLoading(false);
      });
  }, [datas]);
  return <div>This is payment</div>;
};

export default payment;
