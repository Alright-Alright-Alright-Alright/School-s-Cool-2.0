/* eslint-disable react/require-default-props */
import React from "react"
import PropTypes from "prop-types"

const styles = {
  btnPrimaryStyle:
    "border-2 rounded-full bg-white border-grey-dark hover:bg-grey-dark hover:text-white hover:border-white",
  btnSecondaryStyle:
    "border-2 rounded-full text-white bg-grey-dark border-grey-dark hover:bg-white hover:text-grey-dark hover:border-grey-dark",
  btnTopicStyle:
    "border-2 rounded-full bg-white border-aqua text-aqua hover:bg-aqua hover:text-white",
  btnLibraryStyle:
    "border-2 rounded-full bg-white border-pink text-pink hover:bg-pink hover:text-white",
  btnLibraryDownload: "border-2 rounded-full border-pink bg-pink text-white",
  btnCourseStyle:
    "border-2 rounded-full bg-white border-yellow text-yellow hover:bg-yellow hover:text-white",
  btnEventStyle:
    "border-2 rounded-full bg-white border-sky text-sky hover:bg-sky hover:text-white",
  btnEventStyleActive:
    "border-2 rounded-full bg-sky border-sky text-white hover:bg-white hover:text-sky",
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
