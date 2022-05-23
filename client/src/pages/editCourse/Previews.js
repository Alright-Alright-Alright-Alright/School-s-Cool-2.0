import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";

function EditCourse(props) {
  const { selected, setSelected, slides, moveSlideDown, moveSlideUp } = props;
  return (
    <ul className="p-6 flex flex-col gap-4 max-h-screen overflow-scroll scrollBar -mt-36 pt-40">
      {slides.map((slide, index) => (
        <li className="flex gap-2">
          <button type="button" onClick={() => setSelected(index)}>
            <img
              alt="A slide"
              src={slide}
              className={`box-border rounded-md w-60 border-sky  ${
                index === selected
                  ? "opacity-100 border-3"
                  : "opacity-50 border-2"
              }`}
            />
          </button>
          {index === selected && (
            <div className="flex flex-col justify-items-center">
              <button
                type="button"
                className={`bg-sky bg-light rounded-md py-2 px-4 hover:shadow-md float-right mt-8 ${
                  index === 0 && "bg-grey-light"
                }`}
                disabled={index === 0}
                onClick={() => moveSlideUp(index)}
              >
                <ChevronUpIcon className="h-5 text-white" iconName="collapse" />
              </button>
              <button
                type="button"
                className={`bg-sky bg-light rounded-md py-2 px-4 hover:shadow-md float-right mt-8 ${
                  index === slides.length - 1 && "bg-grey-light"
                }`}
                disabled={index === slides.length - 1}
                onClick={() => moveSlideDown(index)}
              >
                <ChevronDownIcon className="h-5 text-white" iconName="expand" />
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

EditCourse.propTypes = {
  selected: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  moveSlideDown: PropTypes.func.isRequired,
  moveSlideUp: PropTypes.func.isRequired,
};

export default EditCourse;
