import React from "react";
import PropTypes from "prop-types";
import Navigation from "./Navigation";

function Infographic(props) {
  const { item, currentPage, pageCount } = props;
  return (
    <main className="mt-8 flex flex-col gap-8">
      <p>{item.content.question}</p>
      <textarea
        className="rounded-md w-full"
        rows={5}
        placeholder="Vul hier je antwoord in"
      />
      <button
        type="button"
        className="bg-sky text-white rounded-md px-4 py-2 hover:bg-sky-dark float-right"
      >
        Antwoord bevestigen
      </button>
      <Navigation currentPage={currentPage} pageCount={pageCount} />
    </main>
  );
}

Infographic.propTypes = {
  item: PropTypes.objectOf({
    content: PropTypes.objectOf({
      question: PropTypes.string.isRequired,
      explanation: PropTypes.string.isRequired,
    }),
  }).isRequired,
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default Infographic;
