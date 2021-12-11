/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React from "react"
import LibraryItem from "../../core/library/libraryItem"
import LibraryModal from "../../core/LibraryModal"

const MainLibraryContent = ({ library, showModal, handleShowModal }) => (
  <div className="h-screen mt-8 relative">
    {showModal && <LibraryModal handleShowModal={handleShowModal} />}
    <LibraryItem library={library} />
  </div>
)

export default MainLibraryContent
