/* eslint-disable react/prop-types */
import React from "react"
import "./ChatBox.css"

export default ({ text, handleTextChange }) => (
  <div>
    <div className="">
      <input
        type="text"
        value={text}
        placeholder="chat here..."
        className=" bg-grey-medium w-full"
        onChange={handleTextChange}
        onKeyDown={handleTextChange}
      />
    </div>
  </div>
)
