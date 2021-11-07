/* eslint-disable react/require-default-props */
import React from "react"
import PropTypes from "prop-types"

const btnPrimaryStyle = "border-2 rounded-full bg-white border-grey-dark"
const btnSecondaryStyle =
  "border-2 rounded-full text-white bg-grey-dark border-grey-dark"

function Button({ buttonName, btnPrimary, buttonSubmit, onClick }) {
  return (
    <button
      type={buttonSubmit ? "submit" : "button"}
      className={btnPrimary ? btnPrimaryStyle : btnSecondaryStyle}
      onClick={onClick}
    >
      <p className="ml-5 mr-5 mt-1 mb-1 text-base">{buttonName}</p>
    </button>
  )
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  btnPrimary: PropTypes.string,
  buttonSubmit: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Button
