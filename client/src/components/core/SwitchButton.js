/* eslint-disable react/prop-types */
import React from "react"

const SwitchButton = ({ toogle, nameLeft, nameRight, privacy }) => (
  <div className="w-44 flex justify-around items-center">
    <p className="text-base">{nameLeft}</p>
    <button type="button">
      <label htmlFor="toggle-switch">
        <input
          type="checkbox"
          id="toogle-switch"
          className="h-6 w-12 cursor-pointer rounded-full appearance-none bg-grey-dark bg-opacity-5 border-1 checked:bg-gray-600 transition duration-200 relative"
          checked={privacy}
          onChange={toogle}
        />
      </label>
    </button>
    <p className="text-base">{nameRight}</p>
  </div>
)

export default SwitchButton
