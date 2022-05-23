import React from "react";
import PropTypes from "prop-types";

function Panel(props) {
  const { item } = props;
  return (
    <div className="p-16 pt-12">
      <img
        alt="A slide"
        src={item}
        className="border-2 rounded-md border-sky m-auto"
      />
    </div>
  );
}

Panel.propTypes = {
  item: PropTypes.objectOf({}).isRequired,
};

export default Panel;
