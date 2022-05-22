/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Button from "../../core/Button"
import LibraryItem from "../../core/library/LibraryItem"
import LibraryModal from "../../core/library/LibraryModal"
import { filterLibraryBySubject } from "../../../redux/actions/libraryActions"

const MainLibraryContent = ({
  library,
  showModal,
  handleShowModal,
  theCategoryToColor,
  setTheCategoryToColor,
}) => {
  const dispatch = useDispatch()
  const filteredLibrary = useSelector((state) => state.library.filteredFiles)

  const handleFilter = (item) => {
    dispatch(filterLibraryBySubject(item))
    setTheCategoryToColor(item)
  }

  const uniqueBySubject = () => {
    const arr = []

    if (filteredLibrary?.length > 0) {
      filteredLibrary?.map(
        (item) => arr.indexOf(item.subject) === -1 && arr.push(item.subject)
      )
    } else {
      library.map(
        (item) => arr.indexOf(item.subject) === -1 && arr.push(item.subject)
      )
    }
    const subjects = arr.map((item) => (
      <span key={item}>
        <Button
          buttonName={item}
          buttonStyle={
            theCategoryToColor === item
              ? "btnLibraryStyleActive"
              : "btnLibraryStyle"
          }
          onClick={() => handleFilter(item)}
        />
      </span>
    ))
    return subjects
  }

  return (
    <div className="h-screen mt-8">
      <div className="pb-8 flex flex-wrap gap-2 lg:gap-0 justify-start lg:space-x-3 lg:pl-0 pl-5">
        {uniqueBySubject()}
      </div>
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
