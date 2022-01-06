/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Main from "../../layout/Main"
import MainLibraryContent from "./MainLibraryContent"
import LibraryContentLeft from "./LibraryContentLeft"
import { getAllFilesFromLibrary } from "../../../redux/actions/libraryActions"
import LibraryContentRight from "./LibraryContentRight"

const Index = () => {
  const library = useSelector((state) => state.library.allFiles)
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    dispatch(getAllFilesFromLibrary())
  }, [dispatch])

  return (
    <div className="">
      <Main
        main={
          <MainLibraryContent
            library={library}
            showModal={showModal}
            handleShowModal={handleShowModal}
          />
        }
        contentLeft={
          <LibraryContentLeft
            library={library}
            handleShowModal={handleShowModal}
          />
        }
        contentRight={
          <LibraryContentRight
            library={library}
            handleShowModal={handleShowModal}
          />
        }
      />
    </div>
  )
}

export default Index
