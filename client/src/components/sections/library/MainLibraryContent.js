/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React from "react"
import { useDispatch } from "react-redux"
import Button from "../../core/Button"
import LibraryItem from "../../core/library/libraryItem"
import LibraryModal from "../../core/LibraryModal"
import { filterLibraryBySubject } from "../../../redux/actions/libraryActions"

const MainLibraryContent = ({ library, showModal, handleShowModal }) => {
  const dispatch = useDispatch()
  const uniqueBySubject = () => {
    const arr = []
    library.map(
      (item) => arr.indexOf(item.subject) === -1 && arr.push(item.subject)
    )
    const subjects = arr.map((item) => (
      <span className="pr-3">
        <Button
          buttonName={item}
          buttonStyle="btnLibraryStyle"
          onClick={() => dispatch(filterLibraryBySubject(item))}
        />
      </span>
    ))
    return subjects
  }

  return (
    <div className="h-screen mt-8 relative">
      <div className="pb-8">{uniqueBySubject()}</div>
      {showModal && <LibraryModal handleShowModal={handleShowModal} />}
      <LibraryItem library={library} />
    </div>
  )
}

export default MainLibraryContent
