import React from "react";
import PropTypes from "prop-types";
import { SaveIcon, LogoutIcon } from "@heroicons/react/solid";

function Panel(props) {
  const { item } = props;
  return (
    <div className="max-w-6xl mx-auto">
      <img
        alt="A slide"
        src={item.image}
        className="border-2 rounded-md border-sky mx-auto"
      />
      <div className="flex justify-start mt-4 gap-2">
        <button
          type="button"
          className="flex gap-2 bg-sky rounded-md text-white px-4 py-2 items-center hover:shadow-md"
        >
          <SaveIcon className="w-5 h-5" />
          Opslaan
        </button>
        <button
          type="button"
          className="flex gap-2 bg-yellow rounded-md text-white px-4 py-2 items-center hover:shadow-md"
        >
          <LogoutIcon className="w-5 h-5" />
          Editor afsluiten
        </button>
      </div>
    </div>
  );
}

Panel.propTypes = {
  item: PropTypes.objectOf({}).isRequired,
};

export default Panel;
