import React from "react"
import PropTypes from "prop-types"

function Button({ buttonName, buttonStyle, buttonSubmit }) {
  return (
    <button
      type={buttonSubmit ? "submit" : "button"}
      className={`min-w-button ${buttonStyle}`}
    >
      {buttonName}
      {/* `${buttonStyle}` */}
    </button>
  )
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string.isRequired,
  buttonSubmit: PropTypes.string.isRequired,
}

export default Button
