import React from "react";
import s from './Review.module.css'

const Review = ({ title, text}) => {
  return (
    <div className={s.container}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Review;
