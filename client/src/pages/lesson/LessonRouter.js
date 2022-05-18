/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import courses from "../../data/mocks/courses";

function Module({ module }) {
  switch (module.type) {
    case "infographic":
      return <p>infographic</p>;
    case "multiplechoice":
      return <p>multiplechoice</p>;
    default:
      throw new Error(`${module.type} is not a valid component type`);
  }
}

Module.propTypes = {
  module: PropTypes.objectOf({
    type: PropTypes.string,
  }).isRequired,
};

function LessonRouter() {
  const params = useParams();
  const item = courses
    .find((course) => course._id === params.courseId)
    .lessons.find((lesson) => lesson._id === params.lessonId).items[
    Number.parseInt(params.itemIndex, 10)
  ];
  return (
    <main className="p-6 flex flex-col space-y-6">
      <section>NAVIGATION</section>
      <section className="grid grid-cols-4 gap-8">
        <Module module={item} />
      </section>
    </main>
  );
}

export default LessonRouter;
