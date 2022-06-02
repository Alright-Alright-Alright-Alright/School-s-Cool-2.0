import React from "react";
import PropTypes from "prop-types";
import { SaveIcon, LogoutIcon } from "@heroicons/react/solid";
import { Panel as InfographicPanel } from "./components/Infographic";
import { Panel as MultiplechoicePanel } from "./components/Multiplechoice";
import { Panel as OpenQuestionPanel } from "./components/Open";

function Module(props) {
  const { item } = props;
  switch (item.type) {
    case "infographic":
      return <InfographicPanel item={item} />;
    case "multiplechoice":
      return <MultiplechoicePanel item={item} />;
    case "open":
      return <OpenQuestionPanel item={item} />;
    // case "summary": {
    //   return <Summary />;
    // }
    default:
      throw new Error(`${item.type} is not a valid component type`);
  }
}

Module.propTypes = {
  item: PropTypes.objectOf({
    type: PropTypes.string,
  }).isRequired,
};

function Panel(props) {
  const { item, key } = props;
  return (
    <div className="max-w-6xl mx-auto" key={key}>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          className="flex gap-2 bg-green rounded-md text-white px-4 py-2 items-center hover:shadow-md"
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
      <Module item={item} />
    </div>
  );
}

Panel.propTypes = {
  item: PropTypes.objectOf({}).isRequired,
  key: PropTypes.string.isRequired,
};

export default Panel;
