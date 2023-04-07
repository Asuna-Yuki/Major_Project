import React from "react";
import { Table } from "./Table";
import { Form } from "./Form";
import { Link } from "react-router-dom";

export const Crop = () => {
  return (
    <>
      <div className='form-container'>
        <h1>CROP</h1>
        <h1>RECOMMENDATION</h1>
        <Form />
      </div>
    </>
  );
};
