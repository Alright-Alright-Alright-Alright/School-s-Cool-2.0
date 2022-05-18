import React from "react";
import CourseContentLeft from "../courses/CourseContentLeft";
import Main from "../../components/layout/Main";
import CourseOverview from "./CourseOverview";

function Course() {
  return <Main contentLeft={<CourseContentLeft />} main={<CourseOverview />} />;
}

Course.propTypes = {};

export default Course;
