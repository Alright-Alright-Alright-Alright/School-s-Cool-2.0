/* eslint-disable react/prop-types */
import React from "react"

const TopicsCard = ({ cardTitle, color }) => (
  <div className="flex flex-col content-center w-48 h-72 bg-white shadow-xl rounded-br-3xl rounded-bl-3xl rounded-tr-3xl">
    <section style={{ margin: "51px 32px 15px" }}>
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
    <section className="font-sans font-semibold text-lg text-center">
      {cardTitle}
    </section>
  </div>
)

export default TopicsCard
