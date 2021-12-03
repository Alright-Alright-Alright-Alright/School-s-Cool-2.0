/* eslint-disable react/prop-types */
import React from "react"

const SwitchButton = ({ toogle, nameLeft, nameRight }) => (
  <div className="w-44 flex justify-around">
    <p>{nameLeft}</p>
    <button type="button" onClick={toogle}>
      <label htmlFor="toggle-switch">
        <input
          type="checkbox"
          id="toogle-switch"
          className="h-6 w-12 cursor-pointer rounded-full appearance-none bg-grey-dark bg-opacity-5 border-1 checked:bg-gray-600 transition duration-200 relative"
        />
      </label>
    </button>
    <p>{nameRight}</p>
  </div>
)

export default SwitchButton