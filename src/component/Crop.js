import React, { useState } from "react";
import { Form } from "./Form";
import { Link } from "react-router-dom";

export const Crop = () => {
  const [formData, setFormData] = useState({
    temp: "",
    rainfall: "",
    humidity: "",
    pH: "",
    phosphorus: "",
    potassium: "",
  });

  const { temp, rainfall, humidity, pH, phosphorus, potassium } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // submit function (action)
  };
  return (
    <>
      <div className='form-container'>
        <h1>CROP</h1>
        <h1>RECOMMENDATION</h1>
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
          <label htmlFor='pH'>pH</label>
          <input
            type='number'
            name='pH'
            value={pH}
            onChange={(e) => onChange(e)}
          />
          {/* phosphorus */}
          <label htmlFor='phosphorus'>Phosphorus</label>
          <input
            type='number'
            name='phosphorus'
            value={phosphorus}
            onChange={(e) => onChange(e)}
          />
          {/*  pota*/}
          <label htmlFor='potassium'>Potassium</label>
          <input
            type='number'
            name='potassium'
            value={potassium}
            onChange={(e) => onChange(e)}
          />
          <Link to='/' className='btn btn-continue'>
            Back
          </Link>
          <button className='btn btn-continue'>Submit</button>
        </form>
      </div>
    </>
  );
};
