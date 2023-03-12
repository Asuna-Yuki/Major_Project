import React from "react";
import { Result } from "./Result";
import Navigate from "react-dom";
import { Link } from "react-dom";
import { useState } from "react";
import { Table } from "./Table";

export const Form = () => {
  const [screen, setScreen] = useState(1);
  const onClick = () => {
    setScreen(2);
  };

  const switchScreen = () => {
    switch (screen) {
      case 1:
        return <Result />;
      default:
        return <Table />;
    }
  };
  return (
    <>
      <form action=''>
        <label htmlFor='temp'>Temprature</label>
        <input type='text' name='temp' id='' />

        <label htmlFor='rainfall'>Rainfall</label>
        <input type='text' name='rainfall' id='' />

        <label htmlFor='humidity'>Humidity</label>
        <input type='text' name='humidity' id='' />

        <label htmlFor='fertilizer'>Fertilizer</label>
        <input type='text' name='fertilizer' id='' />
        <button className='btn btn-continue'>
          {/* <i className='fa-solid fa-arrow-right'></i> */}
          Submit
        </button>
      </form>
    </>
  );
};
