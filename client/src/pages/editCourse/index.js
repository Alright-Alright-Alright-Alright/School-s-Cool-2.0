import React, { useState, useCallback } from "react";
import update from "immutability-helper";
import PreviewList from "./PreviewList";
import Panel from "./Panel";
import items from "./items";

function EditCourse() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [cards, setCards] = useState(items);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-2 p-6">
        <PreviewList
          selected={selectedCard}
          setSelectedCard={setSelectedCard}
          cards={cards}
          moveCard={moveCard}
        />
      </div>
      <div className="col-span-10 p-6">
        <Panel item={cards[selectedCard]} />
      </div>
    </div>
  );
}

EditCourse.propTypes = {};

export default EditCourse;
