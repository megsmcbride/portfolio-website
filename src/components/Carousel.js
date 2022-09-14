import React, { useState } from "react";
import CarouselContents from "./CarouselContents";
import CarouselSlide from "./CarouselSlide";

function Carousel({ contents }) {
  // The value of the item that is supposed to be the center
  const [centerVal, setCenterVal] = useState(2);
  // Length of contents must be >= 5 as window size is 5
  return (
    <>
      <CarouselContents centerVal={centerVal} setCenterVal={setCenterVal}>
        {contents.map((q, index) => {
          return (
            <CarouselSlide key={index + 1} val={index + 1}>
              {index}
            </CarouselSlide>
          );
        })}
      </CarouselContents>
    </>
  );
}

export default Carousel;
