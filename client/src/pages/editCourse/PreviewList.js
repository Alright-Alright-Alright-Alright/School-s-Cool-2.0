import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "./Card";

function PreviewList(props) {
  const { cards, moveCard, setSelectedCard, selectedCard } = props;

  const renderCard = useCallback(
    (card, index) => (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
        image={card.image}
        onClick={setSelectedCard}
        selected={selectedCard === index}
      />
    ),
    [selectedCard, moveCard, setSelectedCard]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <ul className="max-h-full overflow-y-scroll">
        {cards.map((card, i) => renderCard(card, i))}
      </ul>
    </DndProvider>
  );
}

PreviewList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  moveCard: PropTypes.func.isRequired,
  setSelectedCard: PropTypes.func.isRequired,
  selectedCard: PropTypes.number.isRequired,
};

export default PreviewList;
