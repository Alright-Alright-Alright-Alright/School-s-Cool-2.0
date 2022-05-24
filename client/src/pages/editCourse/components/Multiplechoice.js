import React from "react";
import PropTypes from "prop-types";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";

export function Panel(props) {
  const { item } = props;
  console.log(item);
  return (
    <div>
      <p>multiple choiceeee</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
}

Panel.propTypes = {
  item: PropTypes.objectOf({
    image: PropTypes.string.isRequired,
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
      <p>Multiple choice</p>
    </div>
  );
}

Preview.propTypes = {
  selected: PropTypes.bool.isRequired,
};
