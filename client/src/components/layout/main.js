/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from "react"
import PropTypes from "prop-types"

export default function Main({ main, contentLeft, contentRight }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 bg-grey-super_light h-screen ">
        <div className="flex-none justify-center">{contentLeft}</div>
        <div className="md:col-start-1 md:col-span-1 lg:col-start-2 lg:col-span-2">
          {main}
        </div>
        <div className="flex-none justify-center">{contentRight}</div>
      </div>
    </>
  )
}

Main.propTypes = {
  main: PropTypes.any.isRequired,
  contentLeft: PropTypes.any,
  contentRight: PropTypes.any,
}
