/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import courses from "../../data/mocks/courses";
import Infographic from "./Infographic";
import Multiplechoice from "./Multiplechoice";
import Summary from "./Summary";

function Module({ item, currentPage, pageCount }) {
  switch (item.type) {
    case "infographic":
      return (
        <Infographic
          item={item}
          currentPage={currentPage}
          pageCount={pageCount}
        />
      );
    case "multiplechoice":
      return (
        <Multiplechoice
          item={item}
          key={item._id}
          currentPage={currentPage}
          pageCount={pageCount}
        />
      );
    case "summary": {
      return <Summary />;
    }
    default:
      throw new Error(`${item.type} is not a valid component type`);
  }
}

Module.propTypes = {
  item: PropTypes.objectOf({
    type: PropTypes.string,
  }).isRequired,
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

function LessonRouter() {
  const params = useParams();
  const currentPage = Number.parseInt(params.itemIndex, 10);
  const course = courses.find((course) => course._id === params.courseId);
  const lesson = course.lessons.find(
    (lesson) => lesson._id === params.lessonId
  );
  const item = lesson.items[currentPage];
  return (
    <main className="p-6">
      <section>
        <h1 className="bg-grey-dark text-white p-8 rounded-b-xl rounded-tr-xl w-full text-lg">
          {`${course.title} - ${lesson.title}`}
        </h1>
      </section>
      <Module
        item={item}
        currentPage={currentPage}
        pageCount={lesson.items.length}
      />
    </main>
  );
}

export default LessonRouter;
