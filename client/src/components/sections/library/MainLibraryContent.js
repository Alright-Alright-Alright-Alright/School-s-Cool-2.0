/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import Button from "../../core/Button"
import LibraryItem from "../../core/library/LibraryItem"
import LibraryModal from "../../core/library/LibraryModal"
import { filterLibraryBySubject } from "../../../redux/actions/libraryActions"

const MainLibraryContent = ({ library, showModal, handleShowModal }) => {
  const dispatch = useDispatch()
  const [theCategoryToColor, setTheCategoryToColor] = useState("")

  const handleFilter = (item) => {
    dispatch(filterLibraryBySubject(item))
    setTheCategoryToColor(item)
  }

  const uniqueBySubject = () => {
    const arr = []
    library.map(
      (item) => arr.indexOf(item.subject) === -1 && arr.push(item.subject)
    )
    const subjects = arr.map((item) => (
      <span key={item} className="pr-3">
        {console.log(item)}
        {theCategoryToColor === item ? (
          <Button
            buttonName={item}
            buttonStyle="btnLibraryStyleActive"
            onClick={() => handleFilter(item)}
          />
        ) : (
          <Button
            buttonName={item}
            buttonStyle="btnLibraryStyle"
            onClick={() => handleFilter(item)}
          />
        )}
      </span>
    ))
    return subjects
  }

  return (
    <div className="h-screen mt-8">
      <div className="pb-8">{uniqueBySubject()}</div>
      {showModal && (
        <div className="relative">
          <LibraryModal handleShowModal={handleShowModal} />
        </div>
      )}
      <LibraryItem library={library} showModal={showModal} />
    </div>
  )
}

export default MainLibraryContent
