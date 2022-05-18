import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import courses from "../../data/mocks/courses";
import LessonOverview from "./LessonOverview";

function StyledButton(props) {
  const { selected, children, onClick } = props;
  return (
    <button
      type="button"
      className={`${
        selected
          ? "bg-grey-dark text-white"
          : "bg-white text-grey-dark border-2 border-grey-dark"
      } font-thin rounded-full pt-2 pb-2 pl-6 pr-6`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

StyledButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};

function CourseOverview() {
  const params = useParams();
  const course = courses[params.courseId];
  return (
    <main>
      <section className="p-6">
        <h1 className="text-grey-dark font-bold text-xl">{course.title}</h1>
        <h2 className="text-grey-dark text-base pt-4">{course.lorem}</h2>
        <ul className="flex space-x-4 pt-10">
          <li>
            <StyledButton selected>Course</StyledButton>
          </li>
          <li>
            <StyledButton selected={false}>Evaluation</StyledButton>
          </li>
          <li>
            <StyledButton selected={false}>Forum</StyledButton>
          </li>
          <li>
            <StyledButton selected={false}>Credits</StyledButton>
          </li>
        </ul>
      </section>
      <section>
        <LessonOverview />
      </section>
    </main>
  );
}

CourseOverview.propTypes = {};

export default CourseOverview;
