/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  QuestionMarkCircleIcon,
  TrashIcon,
  CheckIcon,
  PlusIcon,
} from "@heroicons/react/solid";

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

export function Panel(props) {
  const { item, setItem } = props;

  const updateOption = (index, value) => {
    const old = item;
    const newContent = { ...old.content };
    const newOptions = [...old.content.options];
    newOptions[index] = value;
    newContent.options = newOptions;
    const newItem = { ...old, content: newContent };

    setItem(newItem);
  };

  const add = () => {
    const old = item;
    const newContent = { ...old.content };
    const newOptions = [...old.content.options, ""];
    newContent.options = newOptions;
    const newItem = { ...old, content: newContent };
    setItem(newItem);
  };

  const updateQuestion = (newQuestion) => {
    const old = item;
    const newItem = { ...old };
    newItem.content.question = newQuestion;
    setItem(newItem);
  };

  const removeAnswer = (indexToRemove) => {
    const old = item;
    const newContent = { ...old.content };
    const newOptions = [...old.content.options].filter(
      (_, index) => index !== indexToRemove
    );
    newContent.options = newOptions;
    const newItem = { ...old, content: newContent };
    setItem(newItem);
  };

  const setAnswer = (newAnswerIndex) => {
    const old = item;
    const newContent = { ...old.content };
    newContent.answer = newAnswerIndex;
    const newItem = { ...old, content: newContent };
    setItem(newItem);
  };

  return (
    <div className="flex flex-col items-start mt-24 gap-8">
      <input
        type="text"
        value={item.content.question}
        onChange={(e) => updateQuestion(e.target.value)}
        placeholder="Type a question here"
        className="p-4 shadow-md w-96 rounded-md"
      />
      <ul className="flex flex-col gap-y-4">
        {item.content.options.map((option, index) => (
          <li className="flex gap-4 items-center" key={index}>
            <Option
              option={option}
              index={index}
              update={updateOption}
              removeAnswer={removeAnswer}
              setAnswer={setAnswer}
              answer={item.content.answer}
            />
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

      {/* Explanation field */}
      <textarea
        className="w-96"
        rows={5}
        placeholder="Optioneel: voeg een uitleg toe voor het goede antwoord"
      />
    </div>
  );
}

Panel.propTypes = {
  setItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const Option = (props) => {
  const { index, option, update, setAnswer, removeAnswer, answer } = props;
  return (
    <>
      <button
        onClick={() => setAnswer(index)}
        type="button"
        className="flex items-center gap-2 rounded-md bg-white shadow-md hover:shadow-lg py-3 px-4 cursor-pointer"
      >
        {index === answer ? (
          <CheckIcon className="w-5 h-5 rounded-md border-2 border-grey-dark" />
        ) : (
          <div className="w-5 h-5 rounded-md border-2 border-grey-dark" />
        )}
        <input
          placeholder="Type an answer here"
          type="text"
          value={option}
          onChange={(e) => {
            e.stopPropagation();
            update(index, e.target.value);
          }}
          className="w-72 appearance-none focus:border-none border-none rounded grey-medium leading-tight focus:outline-none focus:bg-white focus:border-sky"
        />
      </button>
      <button
        type="button"
        onClick={() => removeAnswer(index)}
        className="rounded-md bg-red-600 h-9 w-9 p-2 hover:bg-red-700 shadow-md hover:shadow-lg"
      >
        <TrashIcon className="w-5 h-5 text-white" />
      </button>
    </>
  );
};

Option.propTypes = {
  option: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  answer: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
  setAnswer: PropTypes.func.isRequired,
  removeAnswer: PropTypes.func.isRequired,
};
