import React from "react";
import PropTypes from "prop-types";

function Infographic(props) {
  const { item } = props;
  return (
    <img
      alt="A slide"
      src={item.image}
      className="border-2 rounded-md border-sky mx-auto mt-16"
    />
  );
}

Infographic.propTypes = {
  item: PropTypes.objectOf({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Infographic;
