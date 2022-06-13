/* eslint-disable no-unreachable */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CourseContentLeft from "../courses/CourseContentLeft";
import Main from "../../components/layout/Main";
import CourseContent from "./CourseContent";
import { getCourse } from "../../redux/actions/elearningActions";
import Loader from "../../components/core/Loader";

function Course() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.elearning.selectedCourse);

  useEffect(() => {
    dispatch(getCourse(courseId));
  }, []);

  if (!course) {
    return <Loader />;
  }

  return (
    <Main
      contentLeft={<CourseContentLeft />}
      main={<CourseContent course={course} />}
    />
  );
}

Course.propTypes = {};

export default Course;
