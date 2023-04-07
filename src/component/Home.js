import React from "react";
import { Table } from "./Table";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className='home-container'>
        <h1>Machine Learning</h1>
        <p>
          Machine learning (ML) is a field of inquiry devoted to understanding
          and building methods that "learn" that is, methods that leverage data
          to improve performance on some set of tasks.It is seen as a part of
          artificial intelligence. Machine learning algorithms build a model
          based on sample data, known as training data, in order to make
          predictions or decisions without being explicitly programmed to do so.
          Machine learning algorithms are used in a wide variety of
          applications, such as in medicine, email filtering, speech
          recognition, agriculture, and computer vision, where it is difficult
          or unfeasible to develop conventional algorithms to perform the needed
          tasks.
        </p>
        {/* <div className='table-container'>
          <Table />
          <Table />
          <Table />
          <Table />
          <Table />
        </div> */}
        <Link to={"/crop"} className='btn btn-continue'>
          {/* Submit */}
          Crop Recommendation
        </Link>
        <Link to={"/fert"} className='btn btn-continue'>
          {/* Submit */}
          Fertilizer Recommendation
        </Link>
      </div>
    </>
  );
};
