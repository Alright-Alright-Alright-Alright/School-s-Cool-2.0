/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {
  filterLibraryByCategory,
  getAllFilesFromLibrary,
  getUserFilesFromLibrary,
} from "../../../redux/actions/libraryActions"

const LibraryContentLeft = ({ library, handleShowModal }) => {
  const dispatch = useDispatch()
  const [color, setColor] = useState(false)

  const handleFilter = (item) => {
    dispatch(filterLibraryByCategory(item))
    setColor(true)
  }

  const handleMyFiles = () => {
    dispatch(getUserFilesFromLibrary())
    setColor(false)
  }

  const getFiles = () => {
    dispatch(getAllFilesFromLibrary())
    setColor(false)
  }

  const uniqueCatergories = () => {
    const arr = []
    library.map(
      (item) => arr.indexOf(item.category) === -1 && arr.push(item.category)
    )
    const categories = arr.map((item) => (
      <div
        key={item}
        className={`text-xl py-2 hover:text-pink ${color && "text-pink"}`}
      >
        <button type="button" onClick={() => handleFilter(item)}>
          {item}
        </button>
      </div>
    ))
    return categories
  }

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
      <section className="pt-2">
        <button type="button" className="text-lg" onClick={handleMyFiles}>
          View my resources
        </button>
      </section>
      <hr className="mt-8 w-52 text-grey-light" />
      <section className="pt-6">{uniqueCatergories()}</section>
      <section>
        <button
          className="text-xl py-2 hover:text-pink"
          type="button"
          onClick={getFiles}
        >
          All resources
        </button>
      </section>
    </div>
  )
}

export default LibraryContentLeft
