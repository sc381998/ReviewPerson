import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(3);
  const { name, job, image, text } = people[index];

  const CheckNumber = (num) => {
    if (num > people.length - 1) return 0;
    else if (num < 0) return people.length - 1;
    else return num;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return CheckNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    if (randomNum === index) randomNum = index + 1;
    setIndex(CheckNumber(randomNum));
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return CheckNumber(newIndex);
    });
  };
  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          suprise me
        </button>
      </article>
    </>
  );
};

export default Review;
