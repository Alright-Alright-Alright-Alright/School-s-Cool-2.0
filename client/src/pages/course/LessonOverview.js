import React from "react";
import PropTypes from "prop-types";

function ListItem(props) {
  const { children, type, duration, completed, onClick } = props;
  console.log({ type, duration, completed });
  return (
    <button type="button" className="" onClick={onClick}>
      {children}
    </button>
  );
}

ListItem.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  duration: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

function CourseOverview() {
  //   const params = useParams();
  //   const course = courses[params.courseId];
  return (
    <section className="p-6">
      <h1 className="text-grey-dark font-bold text-xl">Lesson 1</h1>
      <ul className="flex flex-col space-x-4 pt-10">
        <li>
          <ListItem selected>Course</ListItem>
        </li>
        <li>
          <ListItem selected={false}>Evaluation</ListItem>
        </li>
        <li>
          <ListItem selected={false}>Forum</ListItem>
        </li>
        <li>
          <ListItem selected={false}>Credits</ListItem>
        </li>
      </ul>
    </section>
  );
}

CourseOverview.propTypes = {};

export default CourseOverview;
