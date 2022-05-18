/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { CheckIcon } from "@heroicons/react/solid";

function Option(props) {
  const { children, selected, index, onClick, submitted, isAnswer } = props;

  let style = "w-full rounded-md shadow-sm";
  if (isAnswer && submitted) {
    style = `${style} bg-green text-white`;
  } else if (selected && !isAnswer && submitted) {
    style = `${style} bg-yellow text-white`;
  } else if (submitted) {
    style = `${style} bg-white`;
  } else {
    style = `${style} bg-white hover:bg-grey-light`;
  }

  return (
    <li className={style}>
      <button
        onClick={() => onClick(index)}
        type="button"
        className="flex gap-x-4 w-full py-3 px-4"
        disabled={submitted}
      >
        {submitted ? (
          <p className="w-5" />
        ) : selected ? (
          <CheckIcon className="w-5 h-5  rounded-sm border-2 border-grey-dark" />
        ) : (
          <div className="w-5 h-5 rounded-sm border-2 border-grey-dark" />
        )}
        {children}
      </button>
    </li>
  );
}

Option.propTypes = {
  children: PropTypes.element.isRequired,
  selected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  isAnswer: PropTypes.bool.isRequired,
};

function Multiplechoice(props) {
  const { item } = props;
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const onClick = (index) => {
    setSelectedIndex(index);
  };

  const checkAnswer = () => {
    setSubmitted(true);
  };

  return (
    <main className="mt-8">
      <p>{item.question}</p>
      <br />
      <ul className="flex flex-col gap-y-2">
        {item.options.map((option, index) => (
          <Option
            selected={index === selectedIndex}
            index={index}
            onClick={onClick}
            submitted={submitted}
            isAnswer={item.answer === index}
          >
            {option}
          </Option>
        ))}
      </ul>
      <br />
      <button
        disabled={submitted || selectedIndex === null}
        type="button"
        onClick={checkAnswer}
      >
        Check
      </button>
    </main>
  );
}

Multiplechoice.propTypes = {
  item: PropTypes.objectOf({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Multiplechoice;
