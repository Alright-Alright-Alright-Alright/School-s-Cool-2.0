import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";
import slide1 from "../../data/mocks/assets/Machine Learning Infographics by Slidesgo-geconverteerd-01.jpg";
import slide2 from "../../data/mocks/assets/Machine Learning Infographics by Slidesgo-geconverteerd-02.jpg";
import slide3 from "../../data/mocks/assets/Machine Learning Infographics by Slidesgo-geconverteerd-03.jpg";
import slide4 from "../../data/mocks/assets/Machine Learning Infographics by Slidesgo-geconverteerd-04.jpg";
import slide5 from "../../data/mocks/assets/Machine Learning Infographics by Slidesgo-geconverteerd-05.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5, slide5, slide5];

function EditCourse(props) {
  const { selected, setSelected } = props;
  return (
    <ul className="p-6 flex flex-col gap-4 max-h-screen overflow-scroll scrollBar">
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
                className="bg-sky rounded-md py-2 px-4 hover:shadow-md float-right mt-8"
              >
                <ChevronUpIcon className="h-5 text-white" iconName="collapse" />
              </button>
              <button
                type="button"
                className="bg-sky rounded-md py-2 px-4 hover:shadow-md float-right mt-8"
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
};

export default EditCourse;
