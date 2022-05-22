import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full py-3">
      <button
        type="button"
        className="flex z-10 justify-between items-center w-full hover:shadow-md rounded-bl-md rounded-br-md bg-white rounded-r-md"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="pl-3 py-3 text-md">{title}</div>
        <div className="pr-3 text-lg flex justify-center items-center">
          {isActive ? (
            <ChevronUpIcon className="h-5 text-sky" iconName="collapse" />
          ) : (
            <ChevronDownIcon className="h-5 text-sky" iconName="expand" />
          )}
        </div>
      </button>
      {isActive && (
        <div className=" z-20 -mt-4 bg-transparent transition-transform rounded-bl-md pt-10  px-3 text-base text-grey-medium">
          {content}
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Accordion;
