import React from "react";
import PropTypes from "prop-types";
import Navigation from "./Navigation";

function Infographic(props) {
  const { item, currentPage, pageCount } = props;
  return (
    <main className="mt-8">
      <img src={item.content.image} alt="infographic" className="w-full" />
      <Navigation currentPage={currentPage} pageCount={pageCount} />
    </main>
  );
}

Infographic.propTypes = {
  item: PropTypes.objectOf({
    image: PropTypes.string.isRequired,
  }).isRequired,
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default Infographic;
