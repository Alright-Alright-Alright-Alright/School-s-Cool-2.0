import React from "react";
import PropTypes from "prop-types";

function Infographic(props) {
  const { item } = props;
  return (
    <main className="mt-8">
      <img src={item.image} alt="infographic" className="w-full" />
    </main>
  );
}

Infographic.propTypes = {
  item: PropTypes.objectOf({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Infographic;
