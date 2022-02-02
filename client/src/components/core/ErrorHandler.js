/* eslint-disable react/prop-types */
import React from "react"

const ErrorHandler = ({ error }) => (
  // console.log(error)
  <div className="w-full flex justify-center">
    <p className="text-pink font-semibold">{error}</p>
  </div>
)

export default ErrorHandler
