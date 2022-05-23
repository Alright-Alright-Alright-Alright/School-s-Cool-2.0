import React, { useState } from "react";
import Main from "../../components/layout/Main";
import Previews from "./Previews";

import slide1 from "../../data/mocks/assets/Machine Learning Infographics by Slidesgo-geconverteerd-01.jpg";
import slide2 from "../../data/mocks/assets/Machine Learning Infographics by Slidesgo-geconverteerd-02.jpg";
import slide3 from "../../data/mocks/assets/Machine Learning Infographics by Slidesgo-geconverteerd-03.jpg";
import slide4 from "../../data/mocks/assets/Machine Learning Infographics by Slidesgo-geconverteerd-04.jpg";
import slide5 from "../../data/mocks/assets/Machine Learning Infographics by Slidesgo-geconverteerd-05.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5, slide5, slide5];

const swap = (array, index1, index2) => {
  const copy = [...array];
  const temp = copy[index1];
  copy[index1] = copy[index2];
  copy[index2] = temp;
  return copy;
};

function EditCourse() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [list, setList] = useState(slides);

  const moveSlideUp = (index) => {
    setList(swap(list, index, index - 1));
    setSelectedIndex(index - 1);
  };

  const moveSlideDown = (index) => {
    setList(swap(list, index, index + 1));
    setSelectedIndex(index + 1);
  };

  return (
    <Main
      contentLeft={
        <Previews
          selected={selectedIndex}
          setSelected={setSelectedIndex}
          slides={list}
          moveSlideUp={moveSlideUp}
          moveSlideDown={moveSlideDown}
        />
      }
      main={<p className="overflow-hidden">Lets edit a course</p>}
    />
  );
}

EditCourse.propTypes = {};

export default EditCourse;
