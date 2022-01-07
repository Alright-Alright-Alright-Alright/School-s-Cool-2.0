/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"

export default function Main({ main, contentLeft, contentRight }) {
  return (
    <>
      <div className="min-h-screen grid sm:grid-cols-1 lg:grid-cols-4 bg-grey-super_light">
        <div className=" lg:block max-w-lg">{contentLeft}</div>
        <div className="lg:col-span-2">{main}</div>
        <div className=" lg:block max-w-lg">{contentRight}</div>
      </div>
    </>
  )
}

Main.propTypes = {
  main: PropTypes.any.isRequired,
  contentLeft: PropTypes.any,
  contentRight: PropTypes.any,
}