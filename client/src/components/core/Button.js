/* eslint-disable react/require-default-props */
import React from "react"
import PropTypes from "prop-types"

const styles = {
  btnPrimaryStyle: "border-2 rounded-full bg-white border-grey-dark",
  btnSecondaryStyle:
    "border-2 rounded-full text-white bg-grey-dark border-grey-dark",
  btnTopicStyle:
    "border-2 rounded-full bg-white border-aqua text-aqua hover:bg-aqua hover:text-white",
}

function Button({ buttonName, buttonStyle, buttonSubmit, onClick, disabled }) {
  return (
    <button
      type={buttonSubmit ? "submit" : "button"}
      className={`${styles[buttonStyle]}`}
      onClick={onClick}
      disabled={disabled}
    >
      <p className="ml-5 mr-5 mt-2 mb-2 text-base">{buttonName}</p>
    </button>
  )
}

Button.defaultProps = {
  buttonStyle: styles.btnPrimaryStyle,
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
  buttonSubmit: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default Button
