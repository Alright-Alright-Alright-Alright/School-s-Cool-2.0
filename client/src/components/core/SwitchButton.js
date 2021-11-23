import React from "react"

const SwitchButton = () => (
  <div className="w-44 flex justify-around content-center">
    <p>PUBLIC</p>
    <label htmlFor="toggle-switch">
      <input
        type="checkbox"
        id="toogle-switch"
        className="h-6 w-12 cursor-pointer rounded-full appearance-none bg-grey-dark bg-opacity-5 border-1 checked:bg-gray-600 transition duration-200 relative"
      />
    </label>
    <p>PRIVATE</p>
  </div>
)

export default SwitchButton
