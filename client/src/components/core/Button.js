/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";

const styles = {
  btnPrimaryStyle:
    "border-2 rounded-md bg-white border-grey-dark hover:bg-grey-dark hover:text-white hover:border-white",
  btnSecondaryStyle:
    "border-2 rounded-md text-white bg-grey-dark border-grey-dark hover:bg-white hover:text-grey-dark hover:border-grey-dark",
  btnTopicStyle:
    "border-2 rounded-md bg-white border-aqua text-aqua hover:bg-aqua hover:text-white",
  btnLibraryStyle:
    "border-2 rounded-md bg-white border-pink text-pink hover:bg-pink hover:text-white",
  btnLibraryStyleActive: "border-2 rounded-md bg-pink border-pink text-white",
  btnLibraryDownload: "border-2 rounded-md border-pink bg-pink text-white",
  btnCourseStyle:
    "border-2 rounded-md bg-white border-yellow text-yellow hover:bg-yellow hover:text-white",
  btnEventStyle:
    "border-2 rounded-md bg-white border-sky text-sky hover:bg-sky hover:text-white",
  btnEventStyleActive:
    "border-2 rounded-md bg-sky border-sky text-white hover:bg-white hover:text-sky",
};

function Button({ buttonName, buttonStyle, buttonSubmit, onClick, disabled }) {
  return (
    <button
      type={buttonSubmit ? "submit" : "button"}
      className={`${styles[buttonStyle]}`}
      onClick={onClick}
      disabled={disabled}
    >
      <p className="mx-4 my-2 text-center text-base">{buttonName}</p>
    </button>
  );
}

Button.defaultProps = {
  buttonStyle: styles.btnPrimaryStyle,
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
  buttonSubmit: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
