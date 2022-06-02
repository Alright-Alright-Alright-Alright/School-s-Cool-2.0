import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { PlusIcon } from "@heroicons/react/solid";
import Card from "./Card";
import { Preview as InfographicPreview } from "./components/Infographic";
import { Preview as MultiplechoicePreview } from "./components/Multiplechoice";
import { Preview as OpenQuestionPreview } from "./components/Open";

function Module(props) {
  const { item, selected } = props;
  switch (item.type) {
    case "infographic":
      return <InfographicPreview item={item} selected={selected} />;
    case "multiplechoice":
      return <MultiplechoicePreview selected={selected} />;
    case "open": {
      return <OpenQuestionPreview selected={selected} />;
    }
    default:
      throw new Error(`${item.type} is not a valid component type`);
  }
}

Module.propTypes = {
  item: PropTypes.objectOf({
    type: PropTypes.string,
  }).isRequired,
  selected: PropTypes.bool.isRequired,
};

function PreviewList(props) {
  const {
    cards,
    moveCard,
    setSelectedCard,
    selectedCard,
    setUploadDialogOpen,
  } = props;

  console.log({ selectedCard });

  const renderCard = useCallback(
    (card, index) => (
      <Card
        key={card.id}
        id={card.id}
        index={index}
        moveCard={moveCard}
        onClick={setSelectedCard}
        selected={selectedCard === index}
        setUploadDialogOpen={setUploadDialogOpen}
      >
        <Module item={card} selected={selectedCard === index} />
      </Card>
    ),
    [selectedCard, moveCard, setSelectedCard, setUploadDialogOpen]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <ul
        className={`max-h-full pl-2 pr-2 ${
          cards.length ? "overflow-y-scroll" : "scrollBar"
        }`}
      >
        {cards.map((card, i) => renderCard(card, i))}
        {cards.length ? null : (
          <button
            type="button"
            className="w-full h-4 bg-sky text-white rounded-md hover:shadow-md"
            onClick={() => setUploadDialogOpen(true)}
          >
            <PlusIcon className="h-3 w-3 m-auto" />
          </button>
        )}
      </ul>
    </DndProvider>
  );
}

PreviewList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  moveCard: PropTypes.func.isRequired,
  setSelectedCard: PropTypes.func.isRequired,
  selectedCard: PropTypes.number.isRequired,
  setUploadDialogOpen: PropTypes.func.isRequired,
};

export default PreviewList;
