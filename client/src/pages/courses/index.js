import React from "react";
import CourseMainContent from "./CourseMainContent.tsx";
import CourseContentLeft from "./CourseContentLeft";
import Main from "../../components/layout/Main";

function Courses() {
  return (
    <Main contentLeft={<CourseContentLeft />} main={<CourseMainContent />} />
  );
}

Courses.propTypes = {};

export default Courses;
