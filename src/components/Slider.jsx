import React, { useEffect, useState } from "react";
import { data } from "../data";

const Slider = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
    return () => {};
  }, [index, people]);
  return (
    <div className="slider">
      {people.map((person, personIndex) => {
        const { name, image, title, text } = person;

        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }

        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <article key={personIndex.toString()} className={position}>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{text}</p>
          </article>
        );
      })}
      <button className="prev-btn" onClick={() => setIndex(index - 1)}>
        P
      </button>
      <button className="next-btn" onClick={() => setIndex(index + 1)}>
        N
      </button>
    </div>
  );
};

export default Slider;
