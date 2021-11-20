import React from "react"

const TopicsCard = () => (
  <div className="w-topicsCard h-topicsCard flex flex-col shadow-xl rounded-br-xl rounded-bl-xl">
    <button type="submit">
      <section style={{ margin: "51px 32px 15px" }}>
        <svg
          width="138"
          height="138"
          viewBox="0 0 138 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="59.7998" width="18.4" height="138" fill="#18C7BB" />
          <rect
            y="78.2001"
            width="18.4"
            height="138"
            transform="rotate(-90 0 78.2001)"
            fill="#18C7BB"
          />
        </svg>
      </section>
      <section className="font-sans font-semibold text-lg text-center">
        New Topic
      </section>
    </button>
  </div>
)

export default TopicsCard
