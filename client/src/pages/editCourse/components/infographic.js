import React from "react";
import PropTypes from "prop-types";

export function Panel(props) {
  const { item } = props;
  return (
    <img
      alt="A slide"
      src={item.content.imageUrl}
      className="border-2 rounded-md border-sky mx-auto mt-16"
    />
  );
}

Panel.propTypes = {
  item: PropTypes.objectOf({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export function Preview(props) {
  const { item, selected } = props;
  console.log(item);
  return (
    <img
      alt="A slide"
      src={item.content.imageUrl}
      className={`hover:shadow-md cursor-pointer box-border rounded-md border-sky  ${
        selected ? "opacity-100 border-3" : "opacity-50 border-2"
      }`}
    />
  );
}

Preview.propTypes = {
  item: PropTypes.objectOf({
    image: PropTypes.string.isRequired,
  }).isRequired,
  selected: PropTypes.bool.isRequired,
};
