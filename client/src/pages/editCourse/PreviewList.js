import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "./Card";

function PreviewList(props) {
  const { cards, moveCard, setSelectedCard } = props;

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
      />
    ),
    []
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="">{cards.map((card, i) => renderCard(card, i))}</div>
    </DndProvider>
  );
}

PreviewList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  moveCard: PropTypes.func.isRequired,
  setSelectedCard: PropTypes.func.isRequired,
};

export default PreviewList;
