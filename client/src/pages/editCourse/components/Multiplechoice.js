/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  QuestionMarkCircleIcon,
  TrashIcon,
  CheckIcon,
  PlusIcon,
} from "@heroicons/react/solid";

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

  const setAnswer = (newAnswerIndex) => {
    setItem((old) => {
      const newContent = { ...old.content };
      newContent.answer = newAnswerIndex;
      const newItem = { ...old, content: newContent };
      return newItem;
    });
  };

  return (
    <div className="flex flex-col items-start mt-24 gap-12">
      <input
        type="text"
        value={item.content.question}
        onChange={(e) => updateQuestion(e.target.value)}
        placeholder="Type a question here"
        className="p-4 shadow-md w-96 rounded-sm"
      />
      <ul className="flex flex-col gap-y-4">
        {item.content.options.map((option, index) => (
          <li className="flex gap-6 items-center">
            <button
              onClick={() => setAnswer(index)}
              type="button"
              className="flex items-center gap-2 rounded-sm bg-white shadow-md hover:shadow-lg py-3 px-4 cursor-pointer"
            >
              {index === item.content.answer ? (
                <CheckIcon className="w-5 h-5 rounded-sm border-2 border-grey-dark" />
              ) : (
                <div className="w-5 h-5 rounded-sm border-2 border-grey-dark" />
              )}
              <input
                placeholder="Type an answer here"
                type="text"
                value={option}
                onChange={(e) => update(index, e.target.value)}
                className="w-72 appearance-none focus:border-none border-none rounded grey-medium leading-tight focus:outline-none focus:bg-white focus:border-sky"
              />
            </button>
            <button
              type="button"
              onClick={() => removeAnswer(index)}
              className="rounded-md bg-red-600 h-9 w-9 p-2 hover:bg-red-700 hover:shadow-md"
            >
              <TrashIcon className="w-5 h-5 text-white" />
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={add}
        className={`bg-sky hover:bg-sky-dark rounded-md text-white hover:shadow-md px-4 py-2 flex gap-2 ${
          item.content.options.length >= 6 ? "bg-grey-medium" : ""
        }`}
        disabled={item.content.options.length >= 6}
      >
        <PlusIcon className="w-5 h-5" />
        add answer
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
