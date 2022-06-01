/* eslint-disable react/prop-types */
import React from "react";

const TopicsCard = ({ cardTitle, color }) => (
  <div className="flex flex-col justify-center items-center w-72 lg:w-52 h-72 bg-white shadow-md hover:shadow-lg rounded-br-sm rounded-bl-sm rounded-tr-sm">
    <section>
      <svg
        width="138"
        height="138"
        viewBox="0 0 138 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="59.7998" width="18.4" height="138" fill={color} />
        <rect
          y="78.2001"
          width="18.4"
          height="138"
          transform="rotate(-90 0 78.2001)"
          fill={color}
        />
      </svg>
    </section>
    <section className="font-sans font-semibold text-lg text-center pt-3">
      {cardTitle}
    </section>
  </div>
);

export default TopicsCard;
