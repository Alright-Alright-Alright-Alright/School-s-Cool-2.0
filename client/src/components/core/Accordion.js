import React, { useState } from "react"
import PropTypes from "prop-types"
import Icon from "./Icon"

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="w-full py-3">
      <button
        type="button"
        className="flex z-10 justify-between items-center w-full shadow-lg rounded-bl-3xl rounded-br-3xl bg-white rounded-r-3xl"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="pl-3 py-3 text-lg">{title}</div>
        <div className="pr-3 text-lg flex justify-center items-center">
          {isActive ? <Icon iconName="collapse" /> : <Icon iconName="expand" />}
        </div>
      </button>
      {isActive && (
        <div className=" z-20 -mt-4 bg-transparent transition-transform rounded-bl-3xl pt-10  px-3 text-base">
          {content}
        </div>
      )}
    </div>
  )
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Accordion
