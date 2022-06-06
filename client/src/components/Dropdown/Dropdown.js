/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

function Dropdown(props) {
  const { options, label } = props;
  return (
    <>
      <label htmlFor="filter_category">{label}</label>
      <select
        className="block w-52 mt-2 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        name="animals"
        onChange={(e) => {
          const {
            target: { value },
          } = e;
          const selectedOption = options.find(
            (option) => option.value === value
          );
          if (!selectedOption) {
            throw new Error(`No handler for: ${value}`);
          }
          selectedOption.handler();
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.objectOf({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      handler: PropTypes.func.isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired,
};

export default Dropdown;
