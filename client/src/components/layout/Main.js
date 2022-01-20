/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"

export default function Main({ main, contentLeft, contentRight }) {
  const searching = useSelector((state) => state.searchBar.searching)

  return (
    <>
      <div
        className={`min-h-screen grid sm:grid-cols-1 lg:grid-cols-4 bg-grey-super_light ${
          searching && "opacity-50"
        }`}
      >
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
