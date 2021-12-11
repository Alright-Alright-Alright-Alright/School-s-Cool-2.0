/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React from "react"

const LibraryContentLeft = ({ library, handleShowModal }) => {
  const add = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 138 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="59.7998" width="18.4" height="138" fill="#D32A67" />
      <rect
        y="78.2001"
        width="18.4"
        height="138"
        transform="rotate(-90 0 78.2001)"
        fill="#D32A67"
      />
    </svg>
  )

  return (
    <div className="pl-5 pt-10">
      <section className="flex">
        <span className="pr-2">{add}</span>{" "}
        <button type="button" className="text-lg" onClick={handleShowModal}>
          Add a resource
        </button>
      </section>
      <section className="pt-6">
        {library.map((item) => (
          <p key={item._id} className="text-xl py-2">
            {item.category}
          </p>
        ))}
      </section>
    </div>
  )
}

export default LibraryContentLeft
