/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from "react";
import update from "immutability-helper";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PreviewList from "./PreviewList";
import Panel from "./Panel";
import Upload from "./Upload";
import { updateLesson } from "../../redux/actions/elearningActions";

function EditCourse() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [cards, setCards] = useState([]);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const dispatch = useDispatch();
  const { lessonId } = useParams();

  const save = () => {
    console.log("save");
    dispatch(updateLesson(lessonId, cards));
  };

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

  const setItem = (newItem) => {
    setCards((old) => {
      const newCards = [...old];
      newCards[selectedCard] = newItem;
      return newCards;
    });
  };

  const addItems = (itemsToBeAdded) => {
    setCards((oldItems) => {
      const newItems = [];
      if (!oldItems.length) {
        return itemsToBeAdded;
      }
      oldItems.forEach((item, index) => {
        newItems.push(item);

        // Add the new items at the right place
        if (index === selectedCard) {
          itemsToBeAdded.forEach((e) => newItems.push(e));
        }
      });
      return newItems;
    });
  };

  return (
    <>
      <Upload
        showModal={uploadDialogOpen}
        setShowModal={setUploadDialogOpen}
        addItems={addItems}
      />
      <div className="p-6 grid grid-cols-12 bg-grey-super_light">
        <div className="col-span-2" style={{ height: "85vh" }}>
          <PreviewList
            selected={selectedCard}
            setSelectedCard={setSelectedCard}
            cards={cards}
            moveCard={moveCard}
            selectedCard={selectedCard}
            setUploadDialogOpen={setUploadDialogOpen}
          />
        </div>
        <div className="col-span-10 w-full">
          {cards.length ? (
            <Panel
              item={cards[selectedCard]}
              key={selectedCard}
              setItem={setItem}
              save={save}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

EditCourse.propTypes = {};

export default EditCourse;
