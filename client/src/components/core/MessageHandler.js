/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"

const MessageHandler = ({ error, success }) => (
  // console.log(error)
  <div className="w-full flex justify-center">
    <p
      className={`${
        success ? "font-semibold text-grey-dark" : "text-pink font-semibold"
      }`}
    >
      {success || error}
    </p>
  </div>
)

export default MessageHandler
