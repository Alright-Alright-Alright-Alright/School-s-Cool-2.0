import React from "react";
import PropTypes from "prop-types";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";

export function Panel(props) {
  const { item } = props;
  return (
    <div className="flex flex-col gap-4 mt-24">
      <input
        type="text"
        value={item.content.question}
        placeholder="Type hier de vraagstelling..."
        className="p-4 shadow-md"
      />
      <textarea
        className="bg-grey-light"
        disabled
        rows={5}
        placeholder="Hier kan de gebruiker een antwoord invullen"
      />
    </div>
  );
}

Panel.propTypes = {
  item: PropTypes.objectOf({
    content: PropTypes.objectOf({
      question: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
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
      <p>Open question</p>
    </div>
  );
}

Preview.propTypes = {
  selected: PropTypes.bool.isRequired,
};
