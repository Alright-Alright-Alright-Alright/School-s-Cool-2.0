import React from "react";
import LessonRouter from "./LessonRouter";
import Main from "../../components/layout/Main";

function Lesson() {
  return <Main contentLeft={null} main={<LessonRouter />} />;
}

Lesson.propTypes = {};

export default Lesson;
