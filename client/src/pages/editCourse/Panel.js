import React from "react";
import PropTypes from "prop-types";

function Panel(props) {
  const { item } = props;
  return (
    <div>
      <img
        alt="A slide"
        src={item.image}
        className="max-w-6xl border-2 rounded-md border-sky m-auto"
      />
    </div>
  );
}

Panel.propTypes = {
  item: PropTypes.objectOf({}).isRequired,
};

export default Panel;
