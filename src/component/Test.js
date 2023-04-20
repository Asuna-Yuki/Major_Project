import React, { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";

export const Test = () => {
  const [data, setData] = useState(0);

  // useEffect(() => {
  //   fetch("/members")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);
  // const text = fetch("/members").then((data) => setData(5));

  // useEffect(() => {
  //   // setData([{ ab: "as" }, {}, {}]);
  //   const data = fetch("http://localhost:5000/members").then((res) =>
  //     res.json()
  //   );
  //   console.log(data);
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/members");
  //       const json = await response.json();
  //       setData(json);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const onClick = (e) => {
    e.preventDefault();
    setData(8);
  };
  return (
    <>
      <button className='btn' onClick={onClick}>
        Click me
      </button>
      {console.log(data)}
    </>
  );
};
