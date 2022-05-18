import React from "react";
import CourseContentLeft from "../courses/CourseContentLeft";
import Main from "../../components/layout/Main";
import CourseContent from "./CourseContent";

function Course() {
  return <Main contentLeft={<CourseContentLeft />} main={<CourseContent />} />;
}

Course.propTypes = {};

export default Course;
