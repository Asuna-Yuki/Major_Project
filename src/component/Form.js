import React from "react";
import Navigate from "react-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Table } from "./Table";

export const Form = () => {
  const [formData, setFormData] = useState({
    temp: "",
    rainfall: "",
    humidity: "",
    fertilizer: "",
  });

  const { temp, rainfall, humidity, fertilizer } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // submit function (action)
  };
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor='temp'>Temprature</label>
        <input
          type='number'
          name='temp'
          value={temp}
          onChange={(e) => onChange(e)}
        />

        <label htmlFor='rainfall'>Rainfall</label>
        <input
          type='number'
          name='rainfall'
          value={rainfall}
          onChange={(e) => onChange(e)}
        />

        <label htmlFor='humidity'>Humidity</label>
        <input
          type='number'
          name='humidity'
          value={humidity}
          onChange={(e) => onChange(e)}
        />
        {/* ph */}
        <label htmlFor='fertilizer'>Fertilizer</label>
        <input
          type='number'
          name='fertilizer'
          value={fertilizer}
          onChange={(e) => onChange(e)}
        />
        {/* phosh */}
        {/*  pota*/}
        <Link to='/' className='btn btn-continue'>
          Back
        </Link>
        <button className='btn btn-continue'>
          {/* <i className='fa-solid fa-arrow-right'></i> */}
          Submit
        </button>
      </form>
    </>
  );
};
