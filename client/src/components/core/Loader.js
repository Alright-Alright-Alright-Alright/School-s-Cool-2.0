/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"

const Loader = ({ color }) => {
  const circleCommonClasses = `h-2.5 w-2.5 bg-${color} rounded-full`

  return (
    <div className="flex justify-center">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`} />
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`} />
      <div className={`${circleCommonClasses} animate-bounce400`} />
    </div>
  )
}

export default Loader
