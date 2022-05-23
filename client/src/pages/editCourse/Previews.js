import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";

function EditCourse(props) {
  const { selected, setSelected, slides, moveSlideDown, moveSlideUp } = props;
  return (
    <section className="p-6 border-r-2 border-grey-medium_light max-h-full overflow-scroll">
      <ul className="flex items-center flex-col gap-4 max-h-screen overflow-scroll scrollBar max-w-xs">
        {slides.map((slide, index) => (
          <li className="flex gap-2">
            {/* Up/down buttons */}
            {index === selected && (
              <div className="flex flex-col justify-around">
                <button
                  type="button"
                  className={`bg-sky bg-light rounded-md py-2 px-4 hover:shadow-md float-right mt-8 ${
                    index === 0 && "bg-grey-light"
                  }`}
                  disabled={index === 0}
                  onClick={() => moveSlideUp(index)}
                >
                  <ChevronUpIcon
                    className="h-5 text-white"
                    iconName="collapse"
                  />
                </button>
                <button
                  type="button"
                  className={`bg-sky bg-light rounded-md py-2 px-4 hover:shadow-md float-right mt-8 ${
                    index === slides.length - 1 && "bg-grey-light"
                  }`}
                  disabled={index === slides.length - 1}
                  onClick={() => moveSlideDown(index)}
                >
                  <ChevronDownIcon
                    className="h-5 text-white"
                    iconName="expand"
                  />
                </button>
              </div>
            )}

            {/* Preview panel */}
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
          </li>
        ))}
      </ul>
    </section>
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
