import React, { useState } from "react";
import PropTypes from "prop-types";
import { QuestionMarkCircleIcon, TrashIcon } from "@heroicons/react/solid";

export function Panel() {
  const [item, setItem] = useState({
    type: "multiplechoice",
    id: 1,
    content: {
      question: "Type in your question here",
      options: ["option 1", "option 2", "option 3"],
      answer: 2,
    },
  });

  const update = (index, value) => {
    setItem((old) => {
      const newContent = { ...old.content };
      const newOptions = [...old.content.options];
      newOptions[index] = value;
      newContent.options = newOptions;
      return { ...old, content: newContent };
    });
  };

  const add = () =>
    setItem((old) => {
      const newContent = { ...old.content };
      const newOptions = [...old.content.options, ""];
      newContent.options = newOptions;
      return { ...old, content: newContent };
    });

  const updateQuestion = (newQuestion) => {
    setItem((old) => {
      const newItem = { ...old };
      newItem.content.question = newQuestion;
      return newItem;
    });
  };

  const removeAnswer = (indexToRemove) => {
    setItem((old) => {
      const newContent = { ...old.content };
      const newOptions = [...old.content.options].filter(
        (_, index) => index !== indexToRemove
      );

      newContent.options = newOptions;

      return { ...old, content: newContent };
    });
  };

  return (
    <div>
      <input
        type="text"
        value={item.content.question}
        onChange={(e) => updateQuestion(e.target.value)}
        className="mb-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 grey-medium leading-tight focus:outline-none focus:bg-white focus:border-sky"
      />
      <ul>
        {item.content.options.map((option, index) => (
          <li className="ml-4 flex gap-2">
            <input
              type="text"
              value={option}
              onChange={(e) => update(index, e.target.value)}
              className="mb-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 grey-medium leading-tight focus:outline-none focus:bg-white focus:border-sky"
            />
            <button type="button" onClick={() => removeAnswer(index)}>
              <TrashIcon className="w-5 h-5 text-grey-medium hover:text-red-800" />
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={add}>
        + add answer
      </button>
    </div>
  );
}

Panel.propTypes = {
  // item: PropTypes.objectOf({
  //   image: PropTypes.string.isRequired,
  // }).isRequired,
};

export function Preview(props) {
  const { selected } = props;
  return (
    <div
      className={`h-full w-full text-sky mx-auto bg-grey-super_light rounded-md border-sky  ${
        selected ? "opacity-100 border-3" : "opacity-50 border-2"
      }`}
    >
      <QuestionMarkCircleIcon className="h-10 w-10 text-sky mx-auto mt-8" />
      <p>Multiple choice</p>
    </div>
  );
}

Preview.propTypes = {
  selected: PropTypes.bool.isRequired,
};
