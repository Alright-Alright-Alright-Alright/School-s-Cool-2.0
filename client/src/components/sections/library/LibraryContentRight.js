/* eslint-disable no-unused-vars */
import React from "react"

// eslint-disable-next-line react/prop-types
const LibraryContentRight = ({ library }) => {
  console.log("content right")
  return (
    <div className="flex flex-col items-center justify-evenly w-3/4 h-3/5 bg-white shadow-xl rounded-3xl ml-12 mt-8">
      <section>
        <img src="" alt="" />
        <p>file owner</p>
      </section>
      <section>
        <div>Category: Subject</div>
        <div>grade range</div>
        <div>#tags</div>
      </section>
      <section>likes and number of comments</section>
      <section>comments</section>
    </div>
  )
}

export default LibraryContentRight
