/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import LibraryItem from "../../core/library/libraryItem"
import { getAllFilesFromLibrary } from "../../../redux/actions/libraryActions"

const MainLibraryContent = () => {
  const library = useSelector((state) => state.library.allFiles)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllFilesFromLibrary())
  }, [dispatch])

  return (
    <div className="h-screen mt-8">
      <LibraryItem library={library} />
    </div>
  )
}

export default MainLibraryContent
